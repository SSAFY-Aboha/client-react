import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useUserActions from '@/hooks/useUserActions';
import { useState } from 'react';
import { Link } from 'react-router';

const LoginForm = () => {
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
    save: false,
  });

  const { login } = useUserActions();
  const handleLogin = (e) => {
    e.preventDefault();
    login(loginInput);
  };
  return (
    <form className='w-full' onSubmit={handleLogin}>
      <div className='flex flex-col flex-1 gap-4'>
        <div className='flex flex-col gap-4'>
          <Input
            className='bg-gray-100'
            type='email'
            placeholder='Email'
            value={loginInput.email}
            onChange={(e) => {
              console.log(e.target.value);
              setLoginInput((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <Input
            className='bg-gray-100'
            type='password'
            placeholder='Password'
            value={loginInput.password}
            onChange={(e) => {
              console.log(e.target.value);
              setLoginInput((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
        </div>
        <div className='flex justify-between w-full'>
          <div className='flex items-center'>
            <input
              className=''
              type='checkbox'
              id='save'
              value={loginInput.save}
              onChange={(e) => {
                setLoginInput((prev) => ({ ...prev, save: e.target.checked }));
              }}
            />
            <label className='px-2 text-xs' htmlFor='save'>
              이메일 저장
            </label>
          </div>
          <Link to='#' className='text-sm hover:underline'>
            비빌번호을 잊으셨나요?
          </Link>
        </div>
        <div className=''>
          <Button type='submit' className='w-full'>
            로그인
          </Button>
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
