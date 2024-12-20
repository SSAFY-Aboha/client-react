import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react';

const ChallengeIntroduction = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full py-6 bg-gray-50'>
      <div className='flex flex-col items-center justify-center max-w-screen-xl gap-8 py-12 mx-auto'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='flex items-center gap-2 text-3xl font-bold font-Namum'>
            <StarIcon className='w-8 h-8 text-yellow-500' />
            <span>오늘의 챌린지</span>
            <StarIcon className='w-8 h-8 text-yellow-500' />
          </h1>
          <p className='max-w-2xl text-center text-gray-600'>
            매일 새로운 여행 미션에 도전해보세요! <br />
            일상 속 작은 모험으로 특별한 추억을 만들어보세요.
          </p>
        </div>
        <div className='grid w-full grid-cols-1 gap-6 px-4 md:grid-cols-3'>
          <div className='p-6 bg-white rounded-lg shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='text-3xl'>📸</span>
              <h3 className='font-semibold'>포토 챌린지</h3>
            </div>
            <div className='mb-3 text-gray-600'>오늘의 미션</div>
            <p className='p-3 text-sm rounded-md bg-gray-50'>
              동네에서 가장 예쁜 카페를 찾아 인생샷 남기기
            </p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='text-3xl'>🍽️</span>
              <h3 className='font-semibold'>맛집 챌린지</h3>
            </div>
            <div className='mb-3 text-gray-600'>오늘의 미션</div>
            <p className='p-3 text-sm rounded-md bg-gray-50'>
              한 번도 가보지 않은 식당에서 새로운 메뉴 도전하기
            </p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='text-3xl'>🚶</span>
              <h3 className='font-semibold'>산책 챌린지</h3>
            </div>
            <div className='mb-3 text-gray-600'>오늘의 미션</div>
            <p className='p-3 text-sm rounded-md bg-gray-50'>
              평소와 다른 경로로 동네 한 바퀴 돌아보기
            </p>
          </div>
        </div>
        <Button
          variant='outline'
          className='py-6 mt-6 text-lg font-medium text-white transition-all duration-300 bg-green-600 border-none rounded-xl w-80 hover:bg-green-700 hover:shadow-lg hover:scale-105 active:scale-95 focus:ring-4 focus:ring-green-200'
          onClick="$router.push('/challenge')"
        >
          <div className='flex items-center justify-center gap-2'>
            <i className='text-xl pi pi-star'></i>
            <span>AI로 오늘의 챌린지 추천받기</span>
          </div>
        </Button>
      </div>
    </section>
  );
};
export default ChallengeIntroduction;
