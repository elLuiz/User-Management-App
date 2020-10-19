import React from 'react'

export default function UserData({user}) {
    return (
        <div>
            <h1>{user.user_name}</h1>
            <p>{user.user_email}</p>
        </div>
    )
}
