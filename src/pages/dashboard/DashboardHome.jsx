import React from 'react';
import { FaArrowUp, FaBell, FaCog, FaFilter, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Title from '../../components/title/Title';
import Chart from './admin/chart/Chart';

export const UsersInfo = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="flex gap-2">
        <FaBell size={30} className="bg-gray-300 p-2 rounded-sm" />
        <FaCog size={30} className="bg-gray-300 p-2 rounded-sm" />
      </div>
      <div className="flex items-center gap-2">
        <FaUser size={30} className="bg-gray-300 p-2 rounded-full" />
        {/* <div className="flex flex-col text-start ">
          <h2 className="font-bold text-sm">Super Admin</h2>
          <span className="text-xs font-semibold text-gray-600">
            Super Admin
          </span>
        </div> */}
      </div>
    </div>
  );
};

const DashboardHome = () => {
  return (
    <div className="p-2">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-row justify-between items-center mb-2 md:mb-0">
          <div>
            <Title title={'Dashboard'} />
          </div>

          <div className="md:hidden">
            <UsersInfo />
          </div>
        </div>

        {/* Search, Settings & User Info */}
        <div className="hidden md:flex gap-4 items-center">
          <div className="">
            <input
              type="text"
              className="rounded-full text-sm py-1 px-2 bg-gray-200 w-full focus:outline-none focus:border focus:border-gray-400"
              placeholder="Search.."
            />
          </div>

          <UsersInfo />
        </div>
      </div>

      <hr className="my-2" />

      {/* Dashboard Analytics */}
      <div className="flex flex-col md:flex-row gap-2 w-full">
        {/* Chart & Revenues */}
        <section className="md:w-4/6 p-2 h-full bg-gray-200 rounded-md">
          {/* Navigation */}
          <nav className="">
            <ul className="flex flex-wrap gap-4 text-sm font-semibold text-black/80 border-b-2 w-fit border-black/60 pb-2">
              <li>
                <NavLink to={''}>Overview</NavLink>
              </li>
              <li>
                <NavLink to={''}>Unpaid Students</NavLink>
              </li>
              <li>
                <NavLink to={''}>School Expense</NavLink>
              </li>
              <li>
                <NavLink to={''}>Recent Students</NavLink>
              </li>
              <li>
                <NavLink to={''}>Courses</NavLink>
              </li>
            </ul>
          </nav>

          {/* Earnings & Expenses Chart */}
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col md:flex-row justify-betwee py-2 gap-2">
              {/* Earnings */}
              <div className="bg-gray-300 p-2 rounded-md text-sm space-y-4">
                <h4>Total Earnings</h4>

                <div className="flex justify-between gap-2">
                  <div>
                    <h2 className="font-bold text-xl">$58,123.00</h2>
                    <span>This month</span>
                  </div>

                  <span className="flex items-center text-xs bg-white rounded-full font-semibold mt-auto h-full w-fit p-1">
                    <FaArrowUp className="text-green-600" />
                    +50.03%
                  </span>
                </div>
              </div>

              {/* Expenses */}
              <div className="bg-gray-300 p-2 rounded-md text-sm space-y-4">
                <h4>Total Expenses</h4>

                <div className="flex justify-between gap-2">
                  <div>
                    <h2 className="font-bold text-xl">$18,203.00</h2>
                    <span>This month</span>
                  </div>

                  <span className="flex items-center text-xs bg-white rounded-full font-semibold mt-auto h-full w-fit p-1">
                    <FaArrowUp className="text-green-600" />
                    +50.03%
                  </span>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="w-full h-80 text-xs font-semibold bg-gray-300 p-2 rounded-md">
              <Chart />
            </div>
          </div>
        </section>

        {/* Courses Activities */}
        <aside className="md:w-2/6 p-2 h-full bg-gray-200 rounded-md">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold">Student Activity</h2>
              <FaFilter size={14} />
            </div>
          </div>

          <hr className="my-2" />
        </aside>
      </div>
    </div>
  );
};

export default DashboardHome;
