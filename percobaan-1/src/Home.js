import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(20);

  const handleClick = () => {
    setName("luigi");
    setAge(25);
  };

  return (
    <div className="home">
      <h2>Home Pages</h2>
      <p>
        {name} is {age} years old!!
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
