import { Link } from 'react-router-dom';
import apple from '/apple-store-badge-en.svg';
import google from '/google-play-badge-en.webp';

const quickLinks = [
  { id: 1, text: 'Courses', link: '/courses' },
  { id: 2, text: 'Docs', link: '/docs' },
  { id: 3, text: 'Forum', link: '/forum' },
  { id: 4, text: 'About', link: '/about' },
  { id: 5, text: 'Contact', link: '/contact' },
];

const socialLinks = [
  { id: 1, text: 'Facebook', url: 'https://facebook.com/your-page' },
  { id: 2, text: 'Twitter', url: 'https://twitter.com/your-handle' },
  { id: 3, text: 'LinkedIn', url: 'https://linkedin.com/company/your-company' },
  { id: 4, text: 'Instagram', url: 'https://instagram.com/your-profile' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto py-10 px-5">
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
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="list-none">
              {quickLinks?.map((link) => (
                <li key={link.id} className="mb-2 text-sm">
                  <Link
                    to={link.link}
                    className="text-gray-300 hover:text-white"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="list-none">
              {socialLinks?.map((link) => (
                <li key={link?.id} className="mb-2 text-sm">
                  <Link
                    to={link?.url}
                    className="text-gray-300 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link?.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER SIGNUP */}
          <div className="text-sm">
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
      
      {/* ALPHABETOR COPYRIGHT */}
      <div className="mt-2 bg-black p-5 text-center">
        <small>&copy;2023 ALPHABETOR all rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
