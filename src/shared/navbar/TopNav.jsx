import React from 'react';
import { FaEnvelope, FaLanguage, FaPhoneAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { handleLogOut } from '../../controllers/auth';
import useAuth from '../../hooks/useAuth';

const TopNav = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto text-sm font-semibold hidden md:flex justify-between">
      <div className="flex items-center gap-5 py-3">
        <div className="flex gap-5">
          <span className="flex items-center gap-1">
            {' '}
            <FaEnvelope /> edu.aphabetor@gmail.com
          </span>
          <span className="bg-black w-[1px]"></span>

          <span className="flex items-center gap-1">
            {' '}
            <FaPhoneAlt /> +001 23456789
          </span>
          <span className="bg-black w-[1px]"></span>
        </div>

        <div className="flex items-center gap-1">
          <FaLanguage />
          <select name="" id="" className="p-1 bg-transparent">
            <option value="english" className="bg-white">
              English
            </option>
            <option value="german" className="bg-white">
              German
            </option>
            <option value="polish" className="bg-white">
              Polish
            </option>
            <option value="russian" className="bg-white">
              Russian
            </option>
          </select>
        </div>
      </div>

      <div className="flex gap-2 py-3">
        {user ? (
          <></>
        ) : (
          <>
            {' '}
            <Link to={'/register'}>
              <button className="hover:scale-95">Register</button>
            </Link>
            <span className="bg-black w-[1px]"></span>
          </>
        )}

        {user ? (
          <button
            onClick={() => handleLogOut(logOut, navigate)}
            className="pb-2"
          >
            Sign Out
          </button>
        ) : (
          <Link to={'/login'}>
            <button className="hover:scale-95">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopNav;
