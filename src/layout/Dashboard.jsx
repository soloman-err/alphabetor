import React, { useState } from 'react';
import {
  FaAddressBook,
  FaAngleLeft,
  FaAngleRight,
  FaBook,
  FaCaretSquareRight,
  FaChartBar,
  FaCog,
  FaFileAlt,
  FaHome,
  FaRegUser,
  FaUserGraduate,
} from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const menuItems = [
  { id: 1, icon: FaHome, text: 'Home', to: '/' },
  { id: 2, icon: FaChartBar, text: 'Dashboard', to: '/dashboard' },
  { id: 3, icon: FaBook, text: 'Books', to: 'all-books' },
  { id: 4, icon: FaAddressBook, text: 'Add New Book', to: 'add-new-book' },
  {
    id: 5,
    icon: FaCaretSquareRight,
    text: 'Upload Course',
    to: 'upload-course',
  },
  {
    id: 6,
    icon: FaUserGraduate,
    text: 'Total Students',
    to: 'total-students',
  },
  { id: 7, icon: FaFileAlt, text: 'Reports', to: 'reports' },
  { id: 8, icon: FaCog, text: 'Settings', to: 'settings' },
  { id: 9, icon: FaRegUser, text: 'Logout' },
];

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isDrawerClosed, setIsDrawerClosed] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex flex-row min-h-screen">
      {/* Sidebar Navigation Drawer */}
      <aside className="bg-[#113C4B] z-50 text-white space-y-2 py-2">
        <div className="flex items-center justify-between gap-2">
          <div
            className={`text-xl font-bold uppercase ${
              isDrawerOpen ? 'px-3' : 'hidden py-4'
            }`}
          >
            <Link to={'/dashboard'}>Dashboard</Link>
          </div>

          <button
            onClick={toggleDrawer}
            className="border border-white rounded-sm bg-[#113C4B] text-white focus:outline-none my-1 mx-3"
          >
            {isDrawerOpen ? (
              <FaAngleLeft className="text-xl" />
            ) : (
              <FaAngleRight className="text-xl" />
            )}
          </button>
        </div>

        <hr />

        <nav className="h-full">
          <ul className="flex flex-col h-full space-y-1">
            {menuItems?.map((item) => (
              <li
                onClick={() => setIsDrawerOpen(false)}
                key={item.id}
                className={`hover:text-[#113C4B] hover:bg-gray-50 font-semibold hover:font-bold gap-2 ${
                  item.id === 6 && 7 ? 'mt-' : ''
                }`}
              >
                {isDrawerClosed && (
                  <item.icon
                    onClick={setIsDrawerClosed(!isDrawerClosed)}
                    className="mr-"
                  />
                )}
                <Link
                  to={item.to}
                  className="flex flex-row py-2 px-3 gap-2 w-full"
                >
                  {<item.icon size={20} />}
                  {isDrawerOpen && item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
