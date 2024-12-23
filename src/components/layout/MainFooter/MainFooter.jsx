import { Button } from '@/components/ui/button';

function MainFooter() {
  return (
    <footer className='flex flex-col w-full bg-gray-100'>
      <div className='grid grid-cols-1 gap-8 px-6 py-12 md:grid-cols-4'>
        <div className='space-y-4'>
          <h3 className='text-lg font-bold'>Aboha</h3>
          <p className='text-sm text-gray-600'>
            더 나은 세상을 만들어가는 혁신적인 솔루션
          </p>
          <div className='flex space-x-4'>
            <a href='#' className='text-gray-600 hover:text-black'>
              <i className='fab fa-github'></i>
            </a>
            <a href='#' className='text-gray-600 hover:text-black'>
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>

        <div className='space-y-4'>
          <h3 className='text-lg font-bold'>바로가기</h3>
          <ul className='space-y-2'>
            <li>
              <a href='/about' className='text-gray-600 hover:text-black'>
                회사 소개
              </a>
            </li>
            <li>
              <a href='/services' className='text-gray-600 hover:text-black'>
                서비스
              </a>
            </li>
            <li>
              <a href='/contact' className='text-gray-600 hover:text-black'>
                문의하기
              </a>
            </li>
            <li>
              <a href='/careers' className='text-gray-600 hover:text-black'>
                채용정보
              </a>
            </li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h3 className='text-lg font-bold'>법적 고지</h3>
          <ul className='space-y-2'>
            <li>
              <a href='/privacy' className='text-gray-600 hover:text-black'>
                개인정보처리방침
              </a>
            </li>
            <li>
              <a href='/terms' className='text-gray-600 hover:text-black'>
                이용약관
              </a>
            </li>
            <li>
              <a href='/cookies' className='text-gray-600 hover:text-black'>
                쿠키 정책
              </a>
            </li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h3 className='text-lg font-bold'>연락처</h3>
          <p className='text-gray-600'>서울특별시 강남구</p>
          <p className='text-gray-600'>이메일: contact@aboha.com</p>
          <p className='text-gray-600'>전화: 02-1234-5678</p>
        </div>
      </div>

      <div className='flex items-center justify-between px-6 py-4 border-t border-gray-200'>
        <span className='text-sm text-gray-600'>ⓒ 2024 Aboha, Inc.</span>
        <Button className='hover:text-black'>개발자에게 커피 사주기</Button>
        <span className='text-sm text-gray-600'>SSAFY 12th</span>
      </div>
    </footer>
  );
}

export default MainFooter;
