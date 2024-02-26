"use client";
import { useFormState } from "react-dom";
import styles from "./registerForm.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { register } from "@/lib/action";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="password"
        placeholder="Password Again"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have acount <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
