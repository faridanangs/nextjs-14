"use client";
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [state, formData] = useFormState(login, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/");
  }, [state?.success, router]);

  return (
    <form action={formData} className={styles.form}>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have acount"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
