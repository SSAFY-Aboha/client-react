import { Button } from '@/components/ui/button';

const SocialLoginBox = () => {
  return (
    <div className='flex flex-col items-center w-full gap-4'>
      <Button
        variant='outline'
        className='w-full text-black bg-white hover:bg-gray-100'
        onClick={() => console.log('구글 로그인')}
      >
        구글 로그인
      </Button>
      <Button
        className='w-full bg-[#ffeb00] text-black hover:bg-[#fcd200]'
        onClick={() => console.log('카카오 로그인')}
      >
        카카오 로그인
      </Button>
    </div>
  );
};
export default SocialLoginBox;
