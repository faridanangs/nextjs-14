import { addPost, deletePost } from "@/lib/action";

const ServerActionTestPage = () => {
  // const actoinInComponent = async () => {
  //     "use server"
  //     console.log("Its work")
  // }
  return (
    <div>
      <form action={addPost}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="desc" placeholder="Desc" />
        <input type="text" name="slug" placeholder="Slug" />
        <input type="text" name="userId" placeholder="User Id" />
        <button>Create</button>
      </form>
      <br />
      <form action={deletePost}>
        <input type="text" name="id" placeholder="Post Id" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
