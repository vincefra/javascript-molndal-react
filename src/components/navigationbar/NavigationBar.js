import React from 'react'
import './NavigationBar.css'
import { useHistory } from 'react-router-dom'

export const NavigationBar = () => {
    const history = useHistory();

    return (
        <div className="navigationBarWrapper">
            <span className="home" onClick={() => history.push('/')}>Home</span>
            <span className="login" onClick={() => history.push('/login')}>Login</span>
        </div>
    )
}