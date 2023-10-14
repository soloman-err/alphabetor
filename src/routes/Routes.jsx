import { createBrowserRouter } from 'react-router-dom';
import CourseDetails from '../components/courseDetails/CourseDetails';
import Dashboard from '../layout/Dashboard';
import Root from '../layout/Root';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Courses from '../pages/courses/Courses';
import CourseCategory from '../pages/courses/courseCategory/CourseCategory';
import DashboardHome from '../pages/dashboard/DashboardHome';
import Analytics from '../pages/dashboard/admin/analytics/Analytics';
import Reports from '../pages/dashboard/admin/reports/Reports';
import Settings from '../pages/dashboard/admin/settings/Settings';
import TotalStudents from '../pages/dashboard/admin/totalStudents/TotalStudents';
import UploadCourse from '../pages/dashboard/admin/uploadCourse/UploadCourse';
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
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      { path: '', element: <DashboardHome /> },
      { path: 'analytics', element: <Analytics /> },
      { path: 'reports', element: <Reports /> },
      { path: 'upload-course', element: <UploadCourse /> },
      { path: 'total-students', element: <TotalStudents /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
]);

export default router;
