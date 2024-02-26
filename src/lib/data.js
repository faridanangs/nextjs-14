"use server"
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("Delete Success");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};

export const addPost = async (prevState ,formData) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);
  try {
    connectToDb();
    const post = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });
    await post.save();
    console.log("Add Success");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  console.log(id)
  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("Delete Success");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete User!");
  }
};

export const addUser = async (prevState ,formData) => {
  const { password, username, email, img, isAdmin } = Object.fromEntries(formData);
  const user = await User.findOne({ username });
    if (user) {
      return { error: "Username already exists" };
    }
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)
  try {
    connectToDb();
    const user = new User({
      password: hashPassword,
      username,
      email,
      img,
      isAdmin
    });
    await user.save();
    console.log("Add Success");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add User!");
  }
};
