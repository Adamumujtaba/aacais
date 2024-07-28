import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

function AppLayout() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', paddingBlock: '4rem' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
