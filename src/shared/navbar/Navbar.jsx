import { useState } from 'react';
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { account } from '../../lib/appwrite';
import { useUser } from '../../lib/context/user';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const user = useUser();
  const currentUser = user?.current;
  console.log('From Navbar: ', currentUser);

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
    // { to: '/journals', text: 'Journals' },
    { to: '/docs', text: 'Docs' },
    { to: '/about', text: 'About' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <header className="container mx-auto flex flex-row-reverse md:flex-row justify-between items-center py-6 font-normal uppercase px-3 md:px-10">
        {/* ICON/LOGO */}
        <div className="flex justify-between items-center gap-10">
          <Link to={'/'}>
            <h2 className="font-bold italic text-2xl">Alphabetor</h2>
          </Link>
        </div>

        <div>
          {/* NAVIGATION BAR */}
          <nav className="hidden md:flex gap-3 list-none">
            {navLinks &&
              navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  className={
                    location.pathname === link?.to
                      ? 'px-1 pb-1  text-black text-sm font-semibold border-b-2 border-black'
                      : 'pb-1 text-sm font-semibold'
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
            {/* <input
            type="text"
            placeholder="Search for..."
            className=" rounded-full bg-white border border-zinc-400 text-sm pl-2 pr-8 py-[2px] outline-none"
          /> */}
            <FaSearch size={20} className="absolute right-2" />
          </div>

          {/* USER ACCOUNT/INFO/DASHBOARD DROPDOWN */}
          <button className="relative">
            <FaUserCircle size={24} onClick={toggleDropdownOpen} />
            {isDropdownOpen && (
              <div className="absolute z-20 right-0 top-10 shadow-lg bg-white rounded-md flex flex-col text-start py-2 pb-5">
                <NavLink
                  to={'/user-profile'}
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

                {currentUser ? (
                  <NavLink
                    onClick={closeDropdown}
                    className="hover:bg-zinc-200 py-2 px-5 w-full"
                  >
                    <div
                      type="button"
                      onClick={async () => {
                        await account.deleteSession('current');
                      }}
                    >
                      Sign Out
                    </div>
                  </NavLink>
                ) : (
                  <NavLink
                    to={'/login'}
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
    </div>
  );
};

export default Navbar;
