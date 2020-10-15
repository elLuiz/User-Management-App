export default function validateName(name){
    if(name.length < 2 || !name.match(/^[A-Za-z '-]+$/)) 
        return false

    return true
}

export function validateEmail(email){
    const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(emailFormat))
        return false

    return true
}

export function validatePassword(password){
    if(password.length < 8)
        return false

    return true
}

