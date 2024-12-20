const SpecialLife = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full py-6 h-96'>
      <div className='flex flex-col items-center justify-center gap-8 py-12 size-full'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-3xl font-bold font-Namum'>
            일상의 특별한 순간들
          </h1>
          <pre className='max-w-2xl leading-relaxed text-center text-gray-600 text-wrap text-md'>
            매일 반복되는 일상 속에서도 특별한 순간들이 있습니다. 커피 한 잔의
            여유, 퇴근길의 노을, 주말의 게으른 브런치... 당신의 평범한 하루를
            특별하게 만들어줄 작은 행복들을{' '}
            <span className='font-bold'>아보하</span>에서 찾아보세요.
          </pre>
        </div>
        <div className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-3'>
          <div className='flex flex-col items-center p-6 rounded-lg bg-gray-50'>
            <span className='mb-4 text-4xl'>☕️</span>
            <h3 className='mb-2 font-semibold'>일상 속 쉼표</h3>
            <p className='text-center text-gray-600'>
              하루 중 나를 위한 작은 휴식
            </p>
          </div>
          <div className='flex flex-col items-center p-6 rounded-lg bg-gray-50'>
            <span className='mb-4 text-4xl'>🌅</span>
            <h3 className='mb-2 font-semibold'>일상 속 풍경</h3>
            <p className='text-center text-gray-600'>
              평범한 날의 특별한 순간들
            </p>
          </div>
          <div className='flex flex-col items-center p-6 rounded-lg bg-gray-50'>
            <span className='mb-4 text-4xl'>✨</span>
            <h3 className='mb-2 font-semibold'>일상 속 발견</h3>
            <p className='text-center text-gray-600'>소소하지만 확실한 행복</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SpecialLife;
