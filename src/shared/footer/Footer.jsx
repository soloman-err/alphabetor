import { Link } from 'react-router-dom';
import apple from '../../../public/apple-store-badge-en.svg';
import google from '../../../public/google-play-badge-en.webp';

const Footer = () => {
  return (
    <footer className="px-5 bg-gray-900 text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* BRAND-INFO/LOGO */}
          <div className="flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <h2 className="font-bold italic text-xl uppercase">
                <Link to={'/'}>Alphabetor</Link>
              </h2>

              <p className="text-gray-400">Where Learning Meets Inspiration</p>
            </div>

            {/* INSTALLATION */}
            <div>
              <div className="flex flex-col md:flex-row gap-2 mt-5 lg:mt-auto">
                <img
                  src={apple}
                  alt="apple-store-badge"
                  className="w-[120px] h-10"
                />
                <img
                  src={google}
                  alt="google-play-badge"
                  className="w-[120px] h-10"
                />
              </div>

              {/* ALPHABETOR COPYRIGHT */}
              <div className="mt-2">
                <small>&copy;2023 ALPHABETOR all rights reserved.</small>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="list-none">
              <li className="mb-2">
                <Link to="/courses" className="text-gray-300 hover:text-white">
                  Courses
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/docs" className="text-gray-300 hover:text-white">
                  Docs
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/forum" className="text-gray-300 hover:text-white">
                  Forum
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a
                  href="https://facebook.com/your-page"
                  className="text-gray-300 hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://twitter.com/your-handle"
                  className="text-gray-300 hover:text-white"
                >
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://linkedin.com/company/your-company"
                  className="text-gray-300 hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://instagram.com/your-profile"
                  className="text-gray-300 hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER SIGNUP */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter Signup</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest courses and news.
            </p>
            <form>
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-2 border-gray-600 rounded-md py-2 px-3 text-gray-200 w-full mb-2"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
