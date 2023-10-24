import { createBrowserRouter } from 'react-router-dom';
import CourseDetails from '../components/courseDetails/CourseDetails';
import Dashboard from '../layout/Dashboard';
import Root from '../layout/Root';
import About from '../pages/about/About';
import Bookshop from '../pages/bookshop/Bookshop';
import BookDetails from '../pages/bookshop/bookDetails/BookDetails';
import BooksCategory from '../pages/bookshop/booksCategory/BooksCategory';
import Contact from '../pages/contact/Contact';
import Courses from '../pages/courses/Courses';
import CourseCategory from '../pages/courses/courseCategory/CourseCategory';
import DashboardHome from '../pages/dashboard/DashboardHome';
import AddNewBook from '../pages/dashboard/admin/addNewBook/AddNewBook';
import Analytics from '../pages/dashboard/admin/analytics/Analytics';
import AllBooks from '../pages/dashboard/admin/books/allBooks/AllBooks';
import BookCategory from '../pages/dashboard/admin/books/allBooks/bookCategory/BookCategory';
import Reports from '../pages/dashboard/admin/reports/Reports';
import Settings from '../pages/dashboard/admin/settings/Settings';
import TotalStudents from '../pages/dashboard/admin/totalStudents/TotalStudents';
import UploadCourse from '../pages/dashboard/admin/uploadCourse/UploadCourse';
import Forum from '../pages/forum/Forum';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import UserProfile from '../pages/profile/UserProfile';
import Register from '../pages/register/Register';
import StudentReg from '../pages/register/StudentReg';
import TeacherReg from '../pages/register/teacherReg';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/courses', element: <Courses /> },
      { path: '/course/:courseId', element: <CourseCategory /> },
      { path: '/bookshop', element: <Bookshop /> },
      { path: '/books/:booksId', element: <BooksCategory /> },
      { path: '/book/:title', element: <BookDetails /> },
      { path: '/forum', element: <Forum /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/courses/:id', element: <CourseDetails /> },
      { path: '/user-profile', element: <UserProfile /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/register/student', element: <StudentReg /> },
      { path: '/register/teacher', element: <TeacherReg /> },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      { path: '', element: <DashboardHome /> },
      { path: 'analytics', element: <Analytics /> },
      { path: 'reports', element: <Reports /> },
      {
        path: 'all-books',
        element: <AllBooks />,
        children: [
          { path: '/dashboard/all-books/:category', element: <BookCategory /> },
        ],
      },
      { path: 'add-new-book', element: <AddNewBook /> },
      { path: 'upload-course', element: <UploadCourse /> },
      { path: 'total-students', element: <TotalStudents /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
]);

export default router;
