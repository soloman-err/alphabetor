const Navbar = () => {
  return (
    <header className="flex flex-row justify-between items-center py-5 font-normal uppercase px-10">
      {/* ICON/LOGO */}
      <div></div>

      {/* NAVIGATION BAR */}
      <nav className="flex gap-2 list-none">
        <li>Home</li>
        <li>Courses</li>
        <li>Docs</li>
        <li>Forum</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      {/* LOGIN/REGISTER */}
      <div className="flex flex-row gap-2">
        <button className="alpha-btn">Login</button>
        <button className="alpha-btn">Register</button>
      </div>
    </header>
  );
};

export default Navbar;
