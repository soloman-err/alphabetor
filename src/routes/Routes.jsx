import { createBrowserRouter } from 'react-router-dom';
import CourseDetails from '../components/courseDetails/CourseDetails';
import Root from '../layout/Root';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Courses from '../pages/courses/Courses';
import CourseCategory from '../pages/courses/courseCategory/CourseCategory';
import Docs from '../pages/docs/Docs';
import Forum from '../pages/forum/Forum';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import UserProfile from '../pages/profile/UserProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/courses', element: <Courses /> },
      { path: '/course/:courseId', element: <CourseCategory /> },
      { path: '/docs', element: <Docs /> },
      { path: '/forum', element: <Forum /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/courses/:id', element: <CourseDetails /> },
      { path: '/user-profile', element: <UserProfile /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

export default router;
