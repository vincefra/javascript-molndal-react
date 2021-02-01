import React, { useState } from 'react'

export const LoginView = () => {

    const [loggedInUser, setLoggedInUser] = useState("Vincent")
    const [password, setPassword] = useState()

    return (
        <div>
            <span>Username: </span><input onChange={event => setLoggedInUser(event.target.value)} />
            <span>Password: </span><input type="password" onChange={event => setPassword(event.target.value)} />
            <br />
            <button>Login</button>
        </div>
    )
}