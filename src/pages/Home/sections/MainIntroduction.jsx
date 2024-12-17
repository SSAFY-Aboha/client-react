import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useState } from 'react';
import styles from './MainIntroduction.module.css';

const CLOVER_MESSAGE = [
  {
    title: '오늘도 좋은 하루 보내세요 🌟',
    message: '당신의 하루가 행복으로 가득하길!',
  },
  {
    title: '힘내세요! 💪',
    message: '당신은 할 수 있어요!',
  },
  {
    title: '행복한 여행되세요 ✈️',
    message: '즐거운 추억 만드시길 바랍니다!',
  },
  {
    title: '아보하와 함께해요 🍀',
    message: '좋은 곳 많이 찾으시길 바랄게요!',
  },
  {
    title: '새로운 발견의 시간 🔍',
    message: '오늘은 어떤 특별한 순간이 기다리고 있을까요?',
  },
  {
    title: '당신과 함께하는 여정 🌈',
    message: '일상의 작은 행복을 찾아보세요!',
  },
  {
    title: '설레는 하루의 시작 🌅',
    message: '오늘도 멋진 추억 만드시길 바랍니다!',
  },
];

const MainIntroduction = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const handleCloverClick = () => {
    setIsAlertVisible(true);

    setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
  };
  console.log('React Element', <div>아보하</div>);
  return (
    <section className='flex flex-col w-full items-center justify-center h-[calc(100vh-4rem)]'>
      {isAlertVisible && (
        <Alert
          className='absolute transition-all duration-300 bg-green-100 left-1/5 w-96 top-20'
          variant=''
        >
          <AlertTitle className='font-bold text-center'>
            {
              CLOVER_MESSAGE[Math.floor(Math.random() * CLOVER_MESSAGE.length)]
                .title
            }
          </AlertTitle>
          <AlertDescription className='pt-6 text-center'>
            {
              CLOVER_MESSAGE[Math.floor(Math.random() * CLOVER_MESSAGE.length)]
                .message
            }
          </AlertDescription>
        </Alert>
      )}

      <div className='relative w-4/5 h-full overflow-hidden'>
        {[...Array(10)].map((_, n) => (
          <div
            key={n}
            onClick={handleCloverClick}
            className={`${styles.clover} transition-all cursor-pointer hover:scale-110`}
            style={{ '--delay': `${n * 2}s`, '--position': `${n * 10}%` }}
          >
            <span className='text-4xl transition-all duration-300 hover:text-5xl animate-spin hover:shadow-green-500 hover:shadow-2xl'>
              🍀
            </span>
          </div>
        ))}

        <div className='flex flex-col items-center w-full h-full gap-9 md:flex-row'>
          <div className='flex items-start justify-around w-full h-[30rem]'>
            <div className='flex flex-col justify-around h-full mt-6'>
              <div className='flex flex-col gap-8'>
                <h1 className='text-6xl font-bold md:text-9xl font-Namum'>
                  아보하
                </h1>
                <h2
                  className='pr-4 overflow-hidden text-xl italic border-r-2 md:text-3xl border-r-black animate-typing whitespace-nowrap'
                  aria-label='아주 보통의 하루, 특별한 여정을 시작하다'
                >
                  &quot;아주 보통의 하루, 일상의 소중함을 찾아보세요.&quot;
                </h2>
              </div>
              <pre className='pr-4 mt-8 font-sans text-lg leading-relaxed text-wrap line-clamp-3'>
                아보하는 평범한 일상 속에서 느끼는 작은 모험과 새로운 경험을
                통해, 여행을 꼭 먼 곳에서 하는 것이 아닌 일상의 일부로 즐길 수
                있도록 도와줍니다.
              </pre>
            </div>
            <div className='shadow-green-200 shadow-2xl rounded-lg shrink-0 w-[460px] h-[460px] animate-in'>
              <img
                className='object-cover rounded-xl size-full'
                src='./src/assets/images/mainPage_image.jpg'
                alt='아보하 메인 이미지'
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainIntroduction;
