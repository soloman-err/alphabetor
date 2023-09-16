const Navbar = () => {
  return (
    <header className="flex flex-row justify-between items-center py-5">
      {/* ICON/LOGO */}
      <div></div>

      {/* NAVIGATION MODULAR */}
      <nav className="flex gap-2 list-none">
        <li>Home</li>
        <li>Docs</li>
        <li>Courses</li>
        <li>Forum</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      {/* LOGIN/REGISTER MODULES */}
      <div>
        <button>Login</button>
        <button>Register</button>
      </div>
    </header>
  );
};

export default Navbar;
