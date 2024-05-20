import React, { useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { toast,Toaster } from 'sonner'
const Login = () => {

    
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()


    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (userData.email.trim() == '' || userData.password.trim() == '') {
            toast.error('Los campos no pueden estar vacios')
            return
        }
        localStorage.setItem(
            'userLogin',
            JSON.stringify(userData.email )
        )
        navigate('/dashboard')

    }


    return (
        <div className={styles.containerLogin}>
            <h1>Login page</h1>
            <form onSubmit={ handleSubmit}>
                <div className={styles.formControlLogin}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' value={userData.email} onChange={ handleOnChange} />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' value={userData.password} onChange={ handleOnChange} />
                </div>
                <div className={styles.formControlLogin}>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <Toaster richColors/>
        </div>
    )
}

export default Login