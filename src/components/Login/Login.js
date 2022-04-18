import React from "react";
import styles from "./Login.module.css";

const Login = () => {

    const sudmitHandler = (e) => {
        e.preventDefault();
    }

    return(
        <form className={styles.loginForm} onSubmit={sudmitHandler}>
            <input type="number" placeholder="Enter Employee ID" className={styles.empIdInput} max="1000" min="1" step="1" required />
            <button type="submit" className={styles.loginBtn}>Login</button>
        </form>
    );
}

export default Login;