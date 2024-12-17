import { Outlet } from 'react-router';

const BasicLayout = () => {
  return (
    <div className='flex flex-col w-full h-svh'>
      <main className='flex-1 w-full will-change-auto'>
        <Outlet />
      </main>
    </div>
  );
};
export default BasicLayout;
