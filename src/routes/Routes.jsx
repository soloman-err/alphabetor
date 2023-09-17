import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Courses from '../pages/courses/Courses';
import Docs from '../pages/docs/Docs';
import Forum from '../pages/forum/Forum';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/courses', element: <Courses /> },
      { path: '/docs', element: <Docs /> },
      { path: '/forum', element: <Forum /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

export default router;
