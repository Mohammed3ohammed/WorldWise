import { useEffect, useState } from "react";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

export default function Login() {

  const [email, setEmail] = useState("m@gmail.com");
  const [password, setPassword] = useState("12345678");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/app", {replace: true});
  }, [isAuthenticated, navigate]);

  return (
    <main className={styles.login}>
        <PageNav />
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
                <label htmlFor="email">Email address</label>
                <input type="email" id="email"  onChange={(e) =>  setEmail(e.target.value)} value={password} />
             </div>

             <div className={styles.row}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}  />
             </div>

             <div>
                <Button type="primary">Login   </Button>
                </div>
        </form>
    </main>
  )
}

