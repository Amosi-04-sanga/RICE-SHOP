import styles from '../styles/form.module.css'
import Link from "next/link"
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useRouter } from 'next/router';


const Login = () => {
    const router = useRouter()

    const submitHandle = e => {
        e.preventDefault()
        console.log("form data submited!")

        router.push("/office/data")
    }

    return (
        <div className={styles.login} >
            <div className={styles.formWrapper}>
                <form onSubmit={submitHandle} className={styles.form} autoCorrect="true" autoComplete="false" >
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="email">Enter your email</label>
                        <TextField
                            required
                            id="email"
                            type="email"
                            label="email"
                            placeholder='Enter email'
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="password">Enter password</label>
                        <TextField
                            required
                            id="password"
                            type="password"
                            label="password"
                            className={styles.input}
                        />
                    </div>

                    <button type='submit' className={styles.button} >
                        LOGIN
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Login


