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

  return (
    <div className="home">
      <BlogList blogs={blogs} title="Here We Go!!!" />
    </div>
  );
};

export default Home;
