import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin} className={styles.form}>
          <button>Login With Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
