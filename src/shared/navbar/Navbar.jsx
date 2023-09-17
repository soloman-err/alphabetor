import { useState } from 'react';
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = true; //TODO: (in testing mode!)
  const location = useLocation();

  // USER INFO/DASHBOARD TOGGLER:
  const toggleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // CLOSE DROPDOWN:
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // NAVLINKS:
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/courses', text: 'Courses' },
    { to: '/docs', text: 'Docs' },
    { to: '/forum', text: 'Forum' },
    { to: '/about', text: 'About' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#eaf7fd] flex flex-row-reverse md:flex-row justify-between items-center py-5 font-normal uppercase px-3 md:px-10 border-b border-zinc-500 shadow-md">
      {/* ICON/LOGO */}
      <div className="flex items-center gap-10">
        <h2 className="font-bold italic text-xl">Alphabetor</h2>

        {/* NAVIGATION BAR */}
        <nav className="hidden md:flex gap-3 list-none">
          {navLinks &&
            navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={
                  location.pathname === link?.to
                    ? 'bg-cyan-200 px-2  text-black font-semibold border-r-2 border-black'
                    : ''
                }
              >
                {link.text}
              </NavLink>
            ))}
        </nav>
      </div>

      {/* LOGIN/REGISTER */}
      <div className="hidden md:flex flex-row items-center gap-3">
        {/* SEARCH MODULE */}
        <div className="relative flex items-center gap-2">
          <input
            type="text"
            placeholder="Search for..."
            className=" rounded-full bg-white border border-zinc-400 text-sm pl-2 pr-8 py-[2px] outline-none"
          />
          <FaSearch className="absolute right-2" />
        </div>

        {/* USER ACCOUNT/INFO/DASHBOARD DROPDOWN */}
        <button className="relative">
          <FaUserCircle size={24} onClick={toggleDropdownOpen} />
          {isDropdownOpen && (
            <div className="absolute z-20 right-0 top-10 shadow-lg bg-white rounded-md flex flex-col text-start py-2 pb-10">
              <NavLink
                onClick={closeDropdown}
                className="hover:bg-zinc-200 py-2 px-5 w-full"
              >
                Profile
              </NavLink>
              <NavLink
                onClick={closeDropdown}
                className="hover:bg-zinc-200 py-2 px-5 w-full"
              >
                Dashboard
              </NavLink>
              {user ? (
                <NavLink
                  onClick={closeDropdown}
                  className="hover:bg-zinc-200 py-2 px-5 w-full"
                >
                  Sign Out
                </NavLink>
              ) : (
                <NavLink
                  onClick={closeDropdown}
                  className="hover:bg-zinc-200 py-2 px-5 w-full"
                >
                  Sign In
                </NavLink>
              )}
            </div>
          )}
        </button>
      </div>

      {/* RESPONSIVE SMALL SCREEN LAYOUT */}
      <div className="md:hidden">
        <FaBars size={20} />
      </div>
    </header>
  );
};

export default Navbar;
