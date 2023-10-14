import { useState } from 'react';
import {
  FaAngleDown,
  FaAngleUp,
  FaBars,
  FaSearch,
  FaTimes,
  FaUserCircle,
} from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useUser } from '../../lib/context/user';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const user = useUser();
  const { current, logOut } = user;
  const currentUser = current;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

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

  // Courses Submenu:
  const onlineCourses = [
    { title: 'Web Development', to: 'web-development' },
    { title: 'Data Science', to: 'data-science' },
    { title: 'Graphic Design', to: 'graphic-design' },
    { title: 'Machine Learning', to: 'machine-learning' },
    { title: 'JavaScript', to: 'javascript' },
    { title: 'Python Programming', to: 'python-programming' },
    { title: 'Digital Marketing', to: 'digital-marketing' },
    { title: 'UX/UI Design', to: 'ux-ui-design' },
    { title: 'iOS App Development', to: 'ios-app-development' },
    { title: 'Android Development', to: 'android-development' },
    { title: 'Blockchain', to: 'blockchain' },
    { title: 'Cybersecurity', to: 'cybersecurity' },
    { title: 'Game Development', to: 'game-development' },
    { title: 'Cloud Computing', to: 'cloud-computing' },
    { title: 'Artificial Intelligence', to: 'artificial-intelligence' },
    { title: 'Frontend Development', to: 'frontend-development' },
    { title: 'Backend Development', to: 'backend-development' },
    { title: 'Full Stack Development', to: 'full-stack-development' },
    { title: 'Product Management', to: 'product-management' },
    { title: 'Mobile App Design', to: 'mobile-app-design' },
  ];

  // User Info
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
    <div className="bg-[#164B59] text-white shadow-md sticky top-0 z-50">
      <header className="container mx-auto flex flex-row-reverse md:flex-row justify-between items-center py-6 font-normal uppercase px-3 md:px-10">
        {/* ICON/LOGO */}
        <div className="flex justify-between items-center gap-10">
          <Link to={'/'}>
            <h2 className="font-bold italic text-3xl">Alphabetor</h2>
          </Link>
        </div>

        {/* NAVIGATION BAR */}
        <nav className="relative w-full justify-center hidden md:flex gap-3 list-none">
          {navLinks &&
            navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={
                  location.pathname === link?.to
                    ? 'px-1 pb-1 text-gray-200 font-semibold border-b-2 flex items-center gap-1 hover:text-gray-200 hover:border-gray-200'
                    : 'pb-1 font-semibold flex items-center gap-1 hover:text-gray-200 hover:border-gray-200'
                }
                onMouseEnter={
                  link?.text === 'Courses' ? handleMouseEnter : null
                }
                onMouseLeave={
                  link?.text === 'Courses' ? handleMouseLeave : null
                }
              >
                {link.text}
                {/* Courses Sub-Menu Items will be appeared on hover */}
                {link?.text === 'Courses' && (
                  <>
                    {isHovered ? <FaAngleUp /> : <FaAngleDown />}
                    {isHovered && (
                      <div className="absolute bg-white top-7 left-0 flex flex-row w-full py-2 shadow-lg">
                        <ul className="w-full text-black p-2 rounded-sm mt-2">
                          {onlineCourses?.slice(0, 10).map((course, index) => (
                            <li
                              key={index}
                              className="border-b text-sm hover:bg-[#164B59]/90 hover:text-white hover:font-bold"
                            >
                              <Link
                                to={`/course/${course.to}`}
                                className="block px-1 py-2"
                              >
                                {course.title}
                              </Link>
                            </li>
                          ))}
                        </ul>

                        <ul className="w-full top-5 left-0 bg-white text-black p-2 rounded-sm mt-2">
                          {onlineCourses?.slice(10, 20).map((course, index) => (
                            <li
                              key={index}
                              className="border-b text-sm hover:bg-[#164B59]/90 hover:text-white hover:font-bold"
                            >
                              <Link
                                to={`/course/${course.to}`}
                                className="block px-1 py-2"
                              >
                                {course.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </NavLink>
            ))}
        </nav>

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
        <div className="md:hidden">
          {isOpen ? (
            <FaTimes size={22} onClick={toggleNavbar} />
          ) : (
            <FaBars size={22} onClick={toggleNavbar} />
          )}
        </div>

        {/* Phone Screen Navigation */}
        {isOpen && (
          <div className="absolute inset-0 z-20 left-0 top-0 bottom-0 shadow-lg text-white flex flex-col text-start py-2 pb-5 pt-4 bg-[#113944] w-[80%] space-y-2 h-screen">
            <div className="ms-auto mx-4 p-1 border hover:scale-95 duration-300">
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
                  className="py-2 font-semibold hover:bg-gray-400 hover:text-[#113944] hover:font-bold w-full px-4"
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
