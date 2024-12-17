import MainFooter from '@/components/layout/MainFooter/MainFooter';
import MainHeader from '@/components/layout/MainHeader/MainHeader';
import { Outlet } from 'react-router';

function MainLayout() {
  return (
    <div className='flex flex-col w-full h-svh'>
      <MainHeader />
      <main className='flex-1 w-full will-change-auto'>
        <Outlet />
      </main>
      <MainFooter />
    </div>
  );
}

export default MainLayout;
