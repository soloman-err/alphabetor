import { useState } from 'react';
import { FaBars, FaSearch, FaTimes, FaUserCircle } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useUser } from '../../lib/context/user';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const user = useUser();
  const { current, logOut } = user;
  const currentUser = current;
  console.log('From Navbar: ', user, logOut);
  const [isOpen, setIsOpen] = useState(false);

  // USER INFO/DASHBOARD TOGGLER:
  const toggleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // CLOSE DROPDOWN:
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Nav-Toggler:
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
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

  const dropdownItems = [
    { text: 'Profile', link: '/user-profile' },
    { text: 'Dashboard', link: '/dashboard' },
    ...(currentUser
      ? []
      : [
          {
            text: 'Sign In',
            link: '/login',
          },
        ]),
    ...(currentUser
      ? [
          {
            text: 'Sign Out',
            onClick: async () => {
              logOut();
            },
          },
        ]
      : []),
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
                {dropdownItems?.map((item, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={item.link}
                      onClick={() => {
                        closeDropdown();
                        if (item.onClick) {
                          item.onClick();
                        }
                      }}
                      className="hover:bg-zinc-200 py-2 px-5 w-full"
                    >
                      {item.text}
                    </NavLink>
                  );
                })}
              </div>
            )}
          </button>
        </div>

        {/* RESPONSIVE SMALL SCREEN LAYOUT */}
        {isOpen ? (
          <FaTimes size={22} onClick={toggleNavbar} />
        ) : (
          <FaBars size={22} onClick={toggleNavbar} />
        )}

        {isOpen && (
          <div className="absolute z-20 left-0 top-0 shadow-lg  text-white flex flex-col text-start py-2 pb-5 min-h-screen p-4 pt-4 bg-gray-900 w-[80%]">
            <div className="ms-auto">
              {isOpen ? (
                <FaTimes size={22} onClick={toggleNavbar} />
              ) : (
                <FaBars size={22} onClick={toggleNavbar} />
              )}
            </div>
            {dropdownItems?.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.link}
                  onClick={() => {
                    closeDropdown();
                    if (item.onClick) {
                      item.onClick();
                    }
                  }}
                  className="py-2 hover:bg-gray-400 w-full"
                >
                  {item.text}
                </NavLink>
              );
            })}
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
