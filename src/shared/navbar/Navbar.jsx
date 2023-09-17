import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="flex flex-row justify-between items-center py-5 font-normal uppercase px-10">
      {/* ICON/LOGO */}
      <div></div>

      {/* NAVIGATION BAR */}
      <nav className="flex gap-2 list-none">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/courses"}>Courses</NavLink>
        <NavLink to={"/docs"}>Docs</NavLink>
        <NavLink to={"/forum"}>Forum</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
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
