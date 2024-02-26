import { getUser } from "@/lib/data";
import styles from "./postuser.module.css";
import Image from "next/image";

// FETCH DATA WITH AN API
const getDataUser = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const PostUser = async ({ slug }) => {
  // FETCH DATA WITH AN API
  const user = await getDataUser(slug);
  // FETCH DATA WITHOUT AN API
  // const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={60}
        height={60}
      />
      <div className={styles.text}>
        <span className={styles.title}>Author</span>
        <span className={styles.user}>{user?.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
