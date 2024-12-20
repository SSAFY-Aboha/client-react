import ProfileIcon from '@/components/common/ProfileIcon/ProfileIcon';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import useUserActions from '@/hooks/useUserActions';
import { StarIcon } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router';

function MainHeader() {
  //
  const [isLoading, seIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollPositionRef = useRef(0);
  const SCROLL_THRESHOLD = 50;

  // test
  const { login } = useUserActions();
  const [userFormData, setUserFormData] = useState({
    email: 'test@test.com',
    password: '1q2w3e4r!',
  });

  //
  const [userInfo, setUserInfo] = useState({
    email: '',
    profileImageUrl: '',
  });

  // 스크롤 감지를 통해 Header를 보일 지 말지 결정하는 이벤트 부여
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      // 스크롤이 가장 위쪽에 있으면 보이기
      if (currentScrollPosition < SCROLL_THRESHOLD) {
        setIsVisible(true);
        return;
      }

      // 이전 스크롤  lastScrollPositionRef 과 비교하여 올리는지, 내리는지 확인
      setIsVisible(
        currentScrollPosition < lastScrollPositionRef.current ||
          currentScrollPosition < SCROLL_THRESHOLD,
      );

      lastScrollPositionRef.current = currentScrollPosition;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    // 로그아웃 처리 로직
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-all duration-300 ${
        !isVisible && '-translate-y-full'
      }`}
    >
      <div className='container flex items-center justify-between h-16 px-4 md:px-8'>
        <div className='flex items-center'>
          <Link to='/' className='transition-transform hover:scale-105'>
            <img
              className='w-32 md:w-36'
              src='./src/assets/svg/aboha_logo.svg'
              alt='logo'
            />
          </Link>
        </div>

        <nav className='items-center hidden space-x-6 md:flex'>
          {[
            { path: '/place', label: '특별한 여정 찾아보기' },
            { path: '/place-map', label: '지도에서 찾아보기' },
            { path: '/abog', label: '아보하 Log' },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className='text-sm font-medium text-gray-500 transition-colors hover:text-black'
            >
              {item.label}
            </Link>
          ))}

          <Button variant='outline' className='text-sm font-medium'>
            <Link className='flex items-center gap-2' to='/challenge'>
              <StarIcon className='w-4 h-4 text-yellow-500' />
              <span>오늘의 챌린지</span>
              <StarIcon className='w-4 h-4 text-yellow-500' />
            </Link>
          </Button>

          <Button variant='outline' className='text-sm font-medium'>
            <Link className='flex items-center gap-2' to='/suggest'>
              <span>🍀</span>
              <span>아보하 추천받기</span>
              <span>🍀</span>
            </Link>
          </Button>
        </nav>

        <div className='flex items-center space-x-4'>
          {isLoading ? (
            <>
              <Skeleton className='h-9 w-[100px]' />
              <Skeleton className='w-10 h-10 rounded-full' />
            </>
          ) : (
            <>
              {!isAuthenticated ? (
                <>
                  <Button
                    variant='ghost'
                    className='hidden text-sm md:inline-flex'
                  >
                    <Link to='/signup'>회원가입</Link>
                  </Button>
                  <Button className='text-sm bg-green-500 hover:bg-green-600'>
                    <Link to='/login'>로그인</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={handleLogout}
                    className='text-sm'
                  >
                    로그아웃
                  </Button>
                  <Link to={`/mypage/${userInfo.email}`} className='relative'>
                    <ProfileIcon src={userInfo.profileImageUrl} />
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
