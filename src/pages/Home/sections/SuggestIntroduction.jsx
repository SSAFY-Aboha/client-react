const SuggestIntroduction = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full py-6'>
      <div className='flex flex-col items-center justify-center max-w-screen-xl gap-8 py-12 mx-auto'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-3xl font-bold font-Namum'>
            당신을 위한 맞춤 일상
          </h1>
          <p className='max-w-2xl text-center text-gray-600'>
            지금 당신의 기분에 딱 맞는 일상을 추천해드립니다. <br />
            혼자만의 여유로운 시간이 필요할 때, 활기찬 에너지가 필요할 때,{' '}
            <br />
            각자의 순간에 어울리는 특별한 장소를 만나보세요.
          </p>
        </div>
        <div className='grid w-full grid-cols-1 gap-6 px-4 md:grid-cols-4'>
          <div className='flex flex-col items-center p-6 transition-shadow rounded-lg bg-gray-50 hover:shadow-md'>
            <span className='mb-4 text-4xl'>🌊</span>
            <h3 className='mb-2 font-semibold'>조용한 바다</h3>
            <p className='text-center text-gray-600'>
              혼자만의 시간이 필요할 때
            </p>
          </div>
          <div className='flex flex-col items-center p-6 transition-shadow rounded-lg bg-gray-50 hover:shadow-md'>
            <span className='mb-4 text-4xl'>⛰️</span>
            <h3 className='mb-2 font-semibold'>상쾌한 산책</h3>
            <p className='text-center text-gray-600'>
              활기찬 에너지가 필요할 때
            </p>
          </div>
          <div className='flex flex-col items-center p-6 transition-shadow rounded-lg bg-gray-50 hover:shadow-md'>
            <span className='mb-4 text-4xl'>🏛️</span>
            <h3 className='mb-2 font-semibold'>도시 탐험</h3>
            <p className='text-center text-gray-600'>새로운 발견이 필요할 때</p>
          </div>
          <div className='flex flex-col items-center p-6 transition-shadow rounded-lg bg-gray-50 hover:shadow-md'>
            <span className='mb-4 text-4xl'>🍽️</span>
            <h3 className='mb-2 font-semibold'>맛집 탐방</h3>
            <p className='text-center text-gray-600'>
              일상의 맛있는 휴식이 필요할 때
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SuggestIntroduction;
