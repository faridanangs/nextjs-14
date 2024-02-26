import { deleteUser, getUsers } from "@/lib/data";
import styles from "./adminUser.module.css";
import Image from "next/image";

const AdminUser = async () => {
  const users = await getUsers();
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id} className={styles.user}>
          <div className={styles.detail}>
            <Image
              src={user.img || "/noavatar.png"}
              alt=""
              width={60}
              height={60}
            />
            <span>{user?.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUser;
