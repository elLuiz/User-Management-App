import axios from 'axios';

export default async function verifyUserCredentials({email, password}){
    try{
        const result = await axios.post('/user-login', {
            email,
            password
        })
        if(result.data.success)
            return {'success': true}
        else if(result.data.user)
            return {'user': 'User not found.'}
        else 
            return {'password': 'Wrong password.'}
    }catch(err){
        return {'result': 'Oops. Something unexpected has happened'}
    }
}