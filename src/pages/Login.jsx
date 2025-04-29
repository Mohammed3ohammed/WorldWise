import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  return (
    <div>
        <Link to="/"> 
        <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
        </Link>
    </div>
  )
}

export default Login