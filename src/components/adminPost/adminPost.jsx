import { getPosts } from "@/lib/data";
import styles from "./adminPost.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPost = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id} className={styles.post}>
            <div className={styles.detail}>
              <Image
                src={post.img || "/noavatar.png"}
                alt=""
                width={60}
                height={60}
              />
              <span>{post.title}</span>
            </div>
            <form action={deletePost}>
                <input type="hidden" name="id" value={post.id} />
              <button>Delete</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default AdminPost;
