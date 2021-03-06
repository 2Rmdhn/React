import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "Lorem Ipsum...",
      author: "mario",
      id: 1,
    },
    {
      title: "Welcome party",
      body: "Lorem Ipsum...",
      author: "yoshi",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "Lorem Ipsum...",
      author: "luigi",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="Here We Go!!!"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
