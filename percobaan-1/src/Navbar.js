const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>React Blog</h1>
      <div className="link">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;