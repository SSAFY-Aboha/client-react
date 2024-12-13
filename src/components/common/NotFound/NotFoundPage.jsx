import React from 'react';
import { useNavigate } from 'react-router';

function NotFoundPage() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 space-y-8 text-center'>
      <img
        src='@/assets/aboha_logo.svg'
        alt='Aboha Logo'
        className='w-48 h-auto mb-4 transition-transform hover:scale-105'
      />

      <div className='space-y-4'>
        <h1 className='font-bold text-8xl text-primary/80'>404</h1>
        <p className='text-2xl font-medium text-gray-600'>
          페이지를 찾을 수 없습니다
        </p>
        <p className='text-gray-500'>
          요청하신 페이지가 삭제되었거나 잘못된 경로입니다
        </p>
      </div>

      <button
        onClick={goToHome}
        className='px-8 py-6 mt-8 text-lg transition-all hover:scale-105'
      >
        <i className='mr-2 pi pi-home'></i>
        메인으로 돌아가기
      </button>
    </div>
  );
}

export default NotFoundPage;
