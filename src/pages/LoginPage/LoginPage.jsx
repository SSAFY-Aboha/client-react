import LoginForm from '@/pages/LoginPage/LoginForm';
import LoginHeader from '@/pages/LoginPage/LoginHeader';
import SocialLoginBox from '@/pages/LoginPage/SocialLoginBox';
import { Separator } from '@radix-ui/react-separator';
import { Link } from 'react-router';

function LoginPage() {
  return (
    <section className='flex items-center justify-center h-full'>
      <Link
        to='/'
        className='absolute text-sm text-left text-gray-500 cursor-pointer top-20 left-20 pb-7 hover:text-black'
      >
        <i className='pi pi-home'></i>
        <span className='ml-2'>홈으로 돌아가기</span>
      </Link>
      <div className='px-10 py-12 border shadow bg-gradient min-w-[28rem] md:max-h-3/6 lg:max-h-4/6 rounded-xl'>
        <div className='flex flex-col items-center justify-center w-full h-full gap-7'>
          <LoginHeader />
          <LoginForm />
          <div className='text-sm text-center'>
            <span className='mr-2 italic'>아직 아보하 회원이 아니신가요?</span>
            <Link className='underline hover:font-bold' to='/signup'>
              가입하러가기
            </Link>
          </div>
          <Separator label='or' />
          <SocialLoginBox />
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
