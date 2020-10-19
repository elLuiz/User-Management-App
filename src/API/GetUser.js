import axios from 'axios';

export default async function getUser(){
    try{
        const result = await axios.get('/user')
        return await {'data': result.data}
    }catch(err){
        return {'error': err.message}
    }
}