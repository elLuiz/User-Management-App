const postgres = require('../../Connection/Postgres');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcrypt');
const decodeToken = require('../../Tokens/Token');

class UserController{
    getUsers = async (req, res)=>{
        try{
            const result = await postgres.query('SELECT * from "financesapp".user_table')
            return res.status(200).json(result.rows)
        }catch(err){
            return res.status(401).json({'error': err.message})
        }
    }

    insertUser = async (req, res)=>{
        const {name, email, password} = req.body;
        const hashedPassword = await this.hashPassword(password);
        try{
            const result = await postgres.query('INSERT INTO "financesapp".user_table (user_name, user_email, user_password) VALUES($1, $2, $3) RETURNING *', [name.trim(), email.trim(), hashedPassword.trim()])
            await this.createUserToken(res, result.rows[0].user_id)
        }catch(err){
            return res.status(401).json({'error': err.message})
        }

        return res.status(201).json({auth: true})

    }
        
    loginUser = async (req, res)=>{
        const {email, password} = req.body
    
        try{
            const result = await postgres.query('SELECT user_id, user_name, user_password from "financesapp".user_table where user_email=$1', [email])
            if(result.rowCount === 0)
                throw ({'user':'User not found'})
            
            const {user_password, user_id} = await result.rows[0];
            const match = await this.comparePasswords(user_password.trim(), password);
            
            if(match){
                await this.createUserToken(res, user_id);
                return res.status(200).json({'success':'Logged In'})
            }else
                throw ({'password':'Wrong password'})
      
        }catch(err){
            return res.status(200).json(err)
        }
    }

    getUser = async (req, res)=>{
        try{
            const {userId} = await decodeToken(req.cookies.token)
            const queryRes = await postgres.query('SELECT user_id, user_name, user_email, account_created_at from "financesapp".user_table where user_id=$1', [userId])

            if(queryRes.rowCount === 0)
                throw new Error('Could not find data related to this user.')
            
            return res.status(200).json(queryRes.rows[0])
        }catch(err){
            res.status(401).json({'error': err.message})
        }

    }

    comparePasswords = async (dbPassword, postPassword)=>{
        return await bycrypt.compare(postPassword, dbPassword);
    }

    hashPassword = async (plainPassword)=>{
        const hashedPassword = bycrypt.hashSync(plainPassword, 10)
        return hashedPassword   
    }

    createUserToken = async (res, user_id)=>{
        const token = jwt.sign({ userId: user_id }, process.env.SECRET,{ expiresIn: '24h' });
        this.createCookie(res, token)
    } 

    createCookie = (res, token)=>{
        // ephemeral: destroy the cookies when the browser closes
        return res.cookie('token', token, {httpOnly: true, ephemeral: true,expires: new Date(Date.now() + 24*60*60*1000)})
    }
}

module.exports = UserController