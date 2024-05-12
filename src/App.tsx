import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Home } from './pages/Home';
import Staff from './pages/staff/staff';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        {/* <Route path="/signup" Component={SignUp} /> */}
        {/* <Route path='/album' Component={Album} /> */}
        <Route path='/staff' Component={Staff} />
        {/* <Route path='/otp_verification' Component={OtpPage} /> */}

        {/* <Route path='*' element={<Navigate to='/' />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
