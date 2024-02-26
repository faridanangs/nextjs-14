"use client";
import { addUser } from "@/lib/data";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add NewUser</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="Image" />
      <select name="isAdmin">
        <option value="false">IsAdmin?</option>
        <option value="true">yes</option>
        <option value="false">no</option>
      </select>
      <button>Add User</button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;
