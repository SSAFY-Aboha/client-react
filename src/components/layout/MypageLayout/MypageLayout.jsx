import { Outlet } from 'react-router';

const MypageLayout = () => {
  return (
    <div>
      {/* sidebar */}
      <aside>사이드바</aside>
      {/* section */}
      <Outlet />
    </div>
  );
};
export default MypageLayout;
