import { useLogin } from '@/services/userService';
import useUserStore from '@/stores/user';
import { useNavigate } from 'react-router';

const useUserActions = () => {
  const loginMutation = useLogin();
  const { setUserInfo } = useUserStore();

  const navigate = useNavigate();

  const login = async (user) => {
    try {
      const response = await loginMutation.mutateAsync(user);

      if (response.data) {
        setUserInfo(response.data, () => {
          navigate('/');
        });
      }
    } catch (error) {
      switch (error.status) {
        case 401:
          alert('아이디 및 비밀번호를 확인해주세요.');
          break;
        case 400:
          alert('이메일 형식을 확인해주세요.');
          break;
        default:
          break;
      }
      console.error(error);
    }
  };

  return {
    login,
  };
};
export default useUserActions;
