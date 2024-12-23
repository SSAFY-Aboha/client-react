import SignupForm from '@/pages/SignupPage/SignupForm';

function SignupPage() {
  return (
    <section className='flex items-center justify-center h-full'>
      <div className='px-10 py-12 border shadow bg-gradient min-w-[28rem] md:max-h-3/6 lg:max-h-4/6 rounded-xl'>
        <div className='flex flex-col items-center justify-center w-full h-full gap-3'>
          <SignupForm />
        </div>
      </div>
    </section>
  );
}

export default SignupPage;
