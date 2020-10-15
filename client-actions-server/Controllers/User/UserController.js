// require('dotenv').config();
const postgres = require('../../Connection/Postgres');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcrypt');

class UserController{
    getUsers = (req, res)=>{
        postgres.query("SET SEARCH_PATH to financesapp", (err, result)=> {
            if(err)
                return res.status(401).json(error)
            postgres.query("SELECT * from user_table", (err, result)=>{
                if(err)
                    return res.status(401).json(err);
                
                return res.status(200).json(result.rows);
            })
                   
        });
    }

    insertUser = async (req, res)=>{
        const {name, email, password} = req.body;
        const hashedPassword = await this.hashPassword(password);
        postgres.query("SET SEARCH_PATH to financesapp", (error, result)=>{
            if(error)
                return res.status(401).json(error)
            postgres.query("INSERT INTO user_table (user_name, user_email, user_password) VALUES($1, $2, $3) RETURNING *", [name, email, hashedPassword], (err, result)=>{
                if(err)
                    return res.status(401).json({err, error: 'Could not create user'})
                
                const token = this.createUserToken(res, result.rows[0].user_id)
                return res.status(201).json({auth: true, token: token})
            })    
        });
    }
    
    changeUserPassword = (req, res)=>{
        const id = parseInt(req.params.id);
        const {password} = req.body;
        postgres.query("SET SEARCH_PATH to financesapp", (error, result)=>{
            if(error)
                return res.status(401).json(error)
    
            postgres.query("UPDATE user_table SET user_password=$1 where user_id=$2", [password, id], (err, result)=>{
                if(err)
                    return res.status(401).json(err)
    
                return res.status(200).json({message: "You password has been changed"})
            })
        })
    }
    
    deleteUser = (req, res)=>{
        const id  = parseInt(req.params.id);
        postgres.query("SET search_path to financesapp", (error, result)=>{
       
            if(error)
                return res.status(401).json(error)
            
            postgres.query("DELETE from user_table WHERE user_id=$1", [id], (err, result)=>{
                if(err)
                    return res.status(403).json(err)
                
                if(result.rowCount == 0)
                    return res.status(401).json({message: "User not found."})
                else 
                    return res.status(200).json({message: "User deleted."})
            })  
        })
    }

    hashPassword = async (plainPassword)=>{
        const hashedPassword = bycrypt.hashSync(plainPassword, 10)
        return hashedPassword   
    }

    createUserToken = (res, user_id)=>{
        const token = jwt.sign({ userId: user_id }, process.env.SECRET,{ expiresIn: '24h' });
        this.createCookie(res, token)
    } 

    createCookie = (res, token)=>{
        return res.cookie('token', token, {httpOnly: true, expires: new Date(Date.now() + 24*60*60*1000)})
    }
}

module.exports = UserController