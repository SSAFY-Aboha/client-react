import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { Outlet } from 'react-router';

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
