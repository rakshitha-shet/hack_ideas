import { useNavigate } from "react-router-dom";
import { RoutesTypes } from "../../Types/Routes";
import styles from "./Login.module.css";

const Login = () => {
    const navigate = useNavigate();

    const sudmitHandler = (e) => {
        e.preventDefault();
        navigate(RoutesTypes.ROUTES.HOME);
    }

    return(
        <form className={styles.loginForm} onSubmit={sudmitHandler}>
            <input type="number" placeholder="Employee ID" className={styles.empIdInput} max="1000" min="1" step="1" required />
            <button type="submit" className={styles.loginBtn}>Login</button>
        </form>
    );
}

export default Login;