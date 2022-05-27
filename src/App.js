import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookingEvent from './components/Booking Event/BookingEvent';
import OrderPlace from './components/OrderPlace/OrderPlace';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login&Register/Login/Login';
import Register from './components/Login&Register/Register/Register';
import RequireAuth from './components/RequireAuth';
import { ToastContainer } from 'react-toastify';
import ManageEvent from './components/ManageEvents/ManageEvent';
import AddEvent from './components/AddEvent/AddEvent';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/bookingEvents' element={<RequireAuth><BookingEvent></BookingEvent></RequireAuth>}></Route>
        <Route path='/addEvent' element={<RequireAuth><AddEvent></AddEvent></RequireAuth>}></Route>
        <Route path='/manageEvent' element={<RequireAuth><ManageEvent></ManageEvent></RequireAuth>}></Route>
        <Route path='/orderPlace/:id' element={<RequireAuth><OrderPlace /></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
