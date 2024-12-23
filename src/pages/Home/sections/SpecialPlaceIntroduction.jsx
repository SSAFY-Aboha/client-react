const SpecialPlaceIntroduction = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full py-6'>
      <div className='flex flex-col items-center justify-center max-w-screen-xl gap-8 py-12 mx-auto'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-3xl font-bold font-Namum'>지역별 숨은 명소</h1>
          <p className='max-w-2xl text-center text-gray-600'>
            전국 각지에 숨어있는 특별한 장소들을 소개합니다. 관광객들이 잘
            모르는 현지인들의 아지트부터 SNS에서 핫한 장소까지, 색다른 매력이
            가득한 곳들을 만나보세요.
          </p>
        </div>
        <div className='grid w-full grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              title: '서울',
              description: '도시의 낭만이 숨쉬는 골목길',
              imageUrl: './src/assets/images/seoul.png',
            },
            {
              title: '부산',
              description: '바다와 도시가 만나는 곳',
              imageUrl: './src/assets/images/busan.jpg',
            },
            {
              title: '제주',
              description: '자연과 문화의 특별한 조화',
              imageUrl: './src/assets/images/jeju.jpg',
            },
          ].map(({ title, description, imageUrl }, _) => {
            return (
              <div
                key={title}
                className='relative overflow-hidden rounded-lg group'
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className='object-cover w-full h-64 transition-transform group-hover:scale-105'
                />
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40'>
                  <div className='text-center text-white'>
                    <h3 className='mb-2 text-2xl font-bold'>{title}</h3>
                    <p className='text-sm'>{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default SpecialPlaceIntroduction;
