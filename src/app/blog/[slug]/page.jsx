import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export const generateMetadata = async ({params})=> {
  const {slug} = params;
  const post = await getData(slug);

  return {
    title: post.title,
    description: post.desc,
    metadataBase: "http://localhost:3000",
    openGraph: {
      title: post.title,
      description: post.desc,
      images: [
        {
          url: post.img,
          alt: post.title,
          width:1400,
          height: 700,
        },
      ],
    }    
  }
} 

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITH AN API
  const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  // const post = await getPost(slug);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imageContainer}>
          <Image className={styles.img} src={post.img} alt="" fill />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading.....</div>}>
              <PostUser slug={post.slug} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publish</span>
            <span className={styles.detailValue}>01.02.2034</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
