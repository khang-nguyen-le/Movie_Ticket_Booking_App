import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserTemplate from './template/UserTemplate';
import Homepage from './pages/Homepage/Homepage';
import Page404 from './pages/Page404/Page404';
import Login from './pages/Login/Login';
import AdminTemplate from './template/AdminTemplate';
import LoginAdmin from './pages/Admin/LoginAdmin/LoginAdmin';
import UserManagement from './pages/Admin/UserManagement/UserManagement';
import Signup from './pages/Signup/Signup';
import MovieDetailsPage from './pages/MovieDetails/MovieDetailsPage';
import BookingPage from './pages/BookingPage/BookingPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserTemplate />} >
          <Route index element={<Homepage />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='movie-details/:movieId' element={<MovieDetailsPage />} />
          <Route path='movie-booking/:scheduleId' element={<BookingPage />} />
        </Route>
        <Route path='/' element={<AdminTemplate />}>
          <Route path='admin' element={<UserManagement />} />
        </Route>
        <Route path='/admin/login' element={<LoginAdmin />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
