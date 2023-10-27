import { useState } from 'react';
import {
  FaAngleDown,
  FaAngleUp,
  FaBars,
  FaChartBar,
  FaPenNib,
  FaSearch,
  FaSignInAlt,
  FaSignOutAlt,
  FaTimes,
  FaUser,
  FaUserCircle,
} from 'react-icons/fa';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { handleLogOut } from '../../controllers/auth';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  console.log(user);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCoursesHovered, setIsCoursesHovered] = useState(false);
  const [isBookshopHovered, setIsBookshopHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCoursesMouseEnter = () => {
    setIsCoursesHovered(true);
  };

  const handleCoursesMouseLeave = () => {
    setIsCoursesHovered(false);
  };

  const handleBookshopMouseEnter = () => {
    setIsBookshopHovered(true);
  };

  const handleBookshopMouseLeave = () => {
    setIsBookshopHovered(false);
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
    { to: '/bookshop', text: 'Bookshop' },
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

  // Bookshop Submenu:
  const bookCategories = [
    { title: 'Fiction', to: 'fiction' },
    { title: 'Mystery', to: 'mystery' },
    { title: 'Technology', to: 'technology' },
    { title: 'Science Fiction', to: 'science-fiction' },
    { title: 'Fantasy', to: 'fantasy' },
    { title: 'Romance', to: 'romance' },
    { title: 'Horror', to: 'horror' },
    { title: 'Business', to: 'business' },
    { title: 'History', to: 'history' },
    { title: 'Biography', to: 'biography' },
    { title: 'Travel', to: 'travel' },
    { title: 'Cooking', to: 'cooking' },
    { title: 'Art', to: 'art' },
    { title: 'Philosophy', to: 'philosophy' },
    { title: 'Science', to: 'science' },
    { title: 'Poetry', to: 'poetry' },
    { title: "Children's Books", to: 'children' },
    { title: 'Health & Fitness', to: 'health-fitness' },
    { title: 'Drama', to: 'drama' },
    { title: 'Comics & Graphic Novels', to: 'comics' },
    { title: 'Religion & Spirituality', to: 'religion' },
  ];

  // User Info
  const dropdownItems = [
    { icon: FaUser, text: 'Profile', link: '/user-profile' },
    { icon: FaChartBar, text: 'Dashboard', link: '/dashboard' },
    ...(user ? [] : [{ icon: FaSignInAlt, text: 'Sign In', link: '/login' }]),
    ...(user
      ? [
          {
            icon: FaSignOutAlt,
            text: 'Sign Out',
            onClick: async () => handleLogOut(logOut, navigate),
          },
        ]
      : []),
  ];

  return (
    <div className="sticky top-0 z-50 bg-primary text-white shadow-md">
      <header className="container mx-auto flex flex-row-reverse md:flex-row justify-between items-center py-3 md:py-4 font-normal uppercase px-3">
        {/* ICON/LOGO */}
        <div className="flex justify-between items-center text-end gap-10">
          <NavLink to={'/'}>
            <h2 className="font-bold italic text-2xl md:text-3xl">
              Alphabetor
            </h2>
            <span className="text-xs italic text-end p-1 font-bold capitalize flex items-center justify-end gap-1">
              {' '}
              <FaPenNib /> Guides The Way
            </span>
          </NavLink>
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
                onMouseEnter={() => {
                  if (link?.text === 'Courses') {
                    handleCoursesMouseEnter();
                  } else if (link?.text === 'Bookshop') {
                    handleBookshopMouseEnter();
                  }
                }}
                onMouseLeave={() => {
                  if (link?.text === 'Courses') {
                    handleCoursesMouseLeave();
                  } else if (link?.text === 'Bookshop') {
                    handleBookshopMouseLeave();
                  }
                }}
              >
                {link.text}

                {/* Courses Sub-Menu Items will be appeared on hover
                 */}
                {link?.text === 'Courses' && (
                  <>
                    {isCoursesHovered ? <FaAngleUp /> : <FaAngleDown />}
                    {isCoursesHovered && (
                      <div className="absolute bg-white top-7 left-0 flex flex-row w-full py-2 shadow-lg">
                        <ul className="w-full text-black p-2 rounded-sm mt-2">
                          {onlineCourses?.slice(0, 10).map((course, index) => (
                            <li
                              key={index}
                              className="border-b text-sm hover:bg-[#164B59]/90 hover:text-white hover:font-bold"
                            >
                              <NavLink
                                to={`/course/${course.to}`}
                                className="block px-1 py-2"
                              >
                                {course.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>

                        <ul className="w-full top-5 left-0 bg-white text-black p-2 rounded-sm mt-2">
                          {onlineCourses?.slice(10, 20).map((course, index) => (
                            <li
                              key={index}
                              className="border-b text-sm hover:bg-[#164B59]/90 hover:text-white hover:font-bold"
                            >
                              <NavLink
                                to={`/course/${course.to}`}
                                className="block px-1 py-2"
                              >
                                {course.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}

                {/* Bookshop Sub-Menu Items will be appeared on hover
                 */}
                {link?.text === 'Bookshop' && (
                  <>
                    {isBookshopHovered ? <FaAngleUp /> : <FaAngleDown />}
                    {isBookshopHovered && (
                      <div className="absolute bg-white top-7 left-0 flex flex-row w-full py-2 shadow-lg">
                        <ul className="w-full text-black p-2 rounded-sm mt-2">
                          {bookCategories
                            ?.slice(0, 10)
                            .map((category, index) => (
                              <li
                                key={index}
                                className="border-b text-sm hover:bg-[#164B59]/90 hover:text-white hover:font-bold"
                              >
                                <NavLink
                                  to={`/books/${category?.to}`}
                                  className="block px-1 py-2"
                                >
                                  {category?.title}
                                </NavLink>
                              </li>
                            ))}
                        </ul>

                        <ul className="w-full top-5 left-0 bg-white text-black p-2 rounded-sm mt-2">
                          {bookCategories
                            ?.slice(10, 20)
                            .map((category, index) => (
                              <li
                                key={index}
                                className="border-b text-sm hover:bg-[#164B59]/90 hover:text-white hover:font-bold"
                              >
                                <Link
                                  to={`/books/${category?.to}`}
                                  className="block px-1 py-2"
                                >
                                  {category?.title}
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
              <div className="absolute z-20 right-0 top-14 shadow-lg bg-white w-80 text-black font-semibold rounded-sm flex flex-col text-start py-2">
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
                      className="hover:bg-[#164B59]/20 py-2 px-5 w-full"
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

        {/* PHONE SCREEN NAVIGATION TOGGLE */}
        {isOpen && (
          <div className="fixed inset-0 z-20 left-0 top-0 bottom-0 shadow-lg text-white flex flex-col justify-between text-start py-2 pb-5 bg-[#113944] w-[80%] space-y-2">
            <div className="space-y-4">
              <div className="ms-auto w-fit mx-4 p-1 border rounded-sm hover:scale-95 duration-300">
                {isOpen ? (
                  <FaTimes size={20} onClick={toggleNavbar} />
                ) : (
                  <FaBars size={20} onClick={toggleNavbar} />
                )}
              </div>

              <div>
                {dropdownItems?.map((item, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={item.link}
                      onClick={() => {
                        toggleNavbar();
                        closeDropdown();
                        if (item.onClick) {
                          item.onClick();
                        }
                      }}
                      className="flex items-center gap-2 hover:bg-secondary py-2 font-bold hover:text-[#113944] hover:font-bold px-4 my-1 w-[96%] mx-auto bg-primary/40 rounded-sm"
                    >
                      {<item.icon size={20} />}
                      {item.text}
                    </NavLink>
                  );
                })}
              </div>
            </div>

            <span className="mx-4 text-xs mt-auto font-semibold capitalize">
              Alphabetor &copy; 2023
            </span>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
