import React, { useState } from 'react';
import {
    FaAngleLeft,
    FaAngleRight,
    FaBook,
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
  { id: 2, icon: FaChartBar, text: 'Analytics', to: 'analytics' },
  { id: 3, icon: FaFileAlt, text: 'Reports', to: 'reports' },
  { id: 4, icon: FaBook, text: 'Upload Course', to: 'upload-course' },
  {
    id: 5,
    icon: FaUserGraduate,
    text: 'Total Students',
    to: 'total-students',
  },
  { id: 6, icon: FaCog, text: 'Settings', to: 'settings' },
  { id: 7, icon: FaRegUser, text: 'Logout' },
];

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerClosed, setIsDrawerClosed] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      {/* Sidebar Navigation Drawer */}
      {/* <aside
        className={`w-64 bg-gray-900 text-white h-full fixed transform transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      > */}

      <aside className="bg-[#113C4B] z-50 text-white space-y-2 py-2 transform transition-transform duration-500">
        <div className="relative flex items-center justify-between gap-2 px-5">
          <div
            className={`text-xl font-semibold uppercase ${
              isDrawerOpen ? '' : 'hidden py-4'
            }`}
          >
            Dashboard
          </div>
          <button
            onClick={toggleDrawer}
            className="border border-white rounded-sm bg-[#113C4B] text-white focus:outline-none"
          >
            {isDrawerOpen ? (
              <FaAngleLeft className="text-2xl" />
            ) : (
              <FaAngleRight className="text-2xl" />
            )}
          </button>
        </div>

        <hr />

        <nav className="h-full">
          <ul className="flex flex-col h-full space-y-1">
            {menuItems?.map((item) => (
              <li
                key={item.id}
                className={`hover:bg-gray-200 hover:text-black font-semibold gap-2 ${
                  item.id === 6 && 7 ? 'mt-5' : ''
                }`}
              >
                {isDrawerClosed && (
                  <item.icon
                    onClick={setIsDrawerClosed(!isDrawerClosed)}
                    className="mr-2"
                  />
                )}

                <Link
                  to={item.to}
                  className="flex flex-row py-2 gap-2 w-full px-5"
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
      <div className="p-2">
        {/* Content specific to each route */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
