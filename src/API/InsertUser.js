import axios from 'axios';

export default async function insertUser({name, email, password}){
    try{
        await axios.post('/user', {
            name,
            email,
            password
        }) 
        return {'success': 'Congrats. You\'ve just created an account.'}
    }catch(err){
        const  {response} = err
        if(response.status === 401){
            console.log(response.data)
            if(response.data.err.code === "23505")
                return {'error': 'The email is already in use.'}
        }
    }
}