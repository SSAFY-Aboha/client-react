import { Button } from '@/components/ui/button';
import SignupInput from '@/pages/SignupPage/SignupInput';
import {
  useCheckEmail,
  useCheckNickname,
  useSignup,
} from '@/services/userService';
import { emailValidator, passwordValidator } from '@/utils/validator';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const SignupForm = () => {
  // 회원가입 폼 필드 상태
  const [formState, setFormState] = useState({
    nickname: { value: '', isValid: false, error: '' },
    email: { value: '', isValid: false, error: '' },
    password: { value: '', isValid: false, error: '' },
    'password-check': { value: '', isValid: false, error: '' },
  });

  // 폼 전체 유효성 상태
  const [isFormValid, setIsFormValid] = useState();

  const navigate = useNavigate();

  // 회원가입, 닉네임 중복 확인, 이메일 중복 확인 서비스 훅
  const { mutate: signup, isLoading } = useSignup();
  const { refetch: checkNickname } = useCheckNickname(formState.nickname.value);
  const { refetch: checkEmail } = useCheckEmail(formState.email.value);

  // 폼 필드 상태 업데이트 함수
  const updateField = (field, state) => {
    setFormState((prev) => ({
      ...prev,
      [field]: { ...prev[field], ...state },
    }));
  };

  // input 상태 변경 시 실행되는 함수
  const handleChange = async (field, value) => {
    updateField(field, { value });
    // Todo : 폼 필드별 유효성 검사
    await validateField(field, value);
  };

  const metaData = [
    {
      id: 'nickname',
      text: 'nickname',
      type: 'text',
      errorMsg: '이미 존재하는 닉네임 입니다.',
      get isValidate() {
        return formState.nickname.isValid;
      },
      validator: async (value) => {
        const { isAvailable } = await checkNickname(value);
        console.log('nickname validator', isAvailable);
        return isAvailable;
      },
      customErrorMsg: '이미 존재하는 닉네임 입니다.',
    },
    {
      id: 'email',
      text: 'Email',
      type: 'email',
      errorMsg: '이미 존재하는 이메일 입니다.',
      get isValidate() {
        return formState.email.isValid;
      },
      validator: (value) => {
        const { isValid, errorMsg } = emailValidator(value, checkEmail);
        console.log('email validator', isValid, errorMsg);
      },
      customErrorMsg: '올바른 이메일 형식이 아닙니다.',
    },
    {
      id: 'password',
      text: 'password',
      type: 'password',
      errorMsg: '비밀번호가 일치하지 않습니다.',
      get isValidate() {
        return formState.password.isValid;
      },
      validator: (value) => passwordValidator(value),
      customErrorMsg:
        '비밀번호는 8자 이상이며, 영문, 숫자, 특수문자를 모두 포함해야 합니다.',
    },
    {
      id: 'password-check',
      text: 'password check',
      type: 'password',
      errorMsg: '비밀번호가 일치하지 않습니다.',
      get isValidate() {
        return formState['password-check'].isValid;
      },
      validator: (value, allValues) => {
        return value === allValues.password;
      },
      customErrorMsg: '비밀번호가 일치하지 않습니다.',
    },
  ];

  // 폼 필드 유효성 검사 함수
  const validateField = async (field, value) => {
    const meta = metaData.find((each) => each.id === field);

    // 유효성 검사 함수가 없는 경우 true 반환
    if (!meta.validator) return true;

    try {
      const isValid = meta.validator(value, formState);
      updateField(field, {
        isValid,
        error: isValid ? '' : meta.customErrorMsg,
      });
      return isValid;
    } catch {
      updateField(field, {
        isValid: false,
        error: meta.customErrorMsg,
      });
      return false;
    }
  };

  // 폼 전체 유효성 검사 함수
  const validateForm = () => {
    let isFormValid = true;

    // Todo : 폼 필드별 유효성 검사
    for (const field in formState) {
      const isValid = validateField(field, formState[field].value);
      if (!isValid) {
        isFormValid = false;
      }
    }

    setIsFormValid(isFormValid);
    return isFormValid;
  };

  // 회원가입 버튼 클릭 시 실행되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const input = {
      email: formState.email.value,
      nickname: formState.nickname.value,
      password: formState.password.value,
    };

    signup(input);
  };

  return (
    <>
      <div
        onClick={() => navigate('/')}
        className='absolute text-sm text-left text-gray-500 cursor-pointer top-20 left-20 pb-7 hover:text-black'
      >
        <i className='pi pi-home'></i>
        <span className='ml-2'>홈으로 돌아가기</span>
      </div>
      <h1 className='mb-4 text-3xl font-bold'>Create account</h1>
      <form onSubmit={handleSubmit} className='flex flex-col w-full gap-12'>
        {metaData.map((data) => (
          <SignupInput //
            key={data.id}
            metaData={data}
            error={formState[data.id].error}
            value={formState[data.id].value}
            onChange={(value) => handleChange(data.id, value)}
          />
        ))}

        <Button
          type='submit'
          className='w-full'
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? (
            <span className='flex items-center justify-center gap-2'>
              <i className='pi pi-spinner animate-spin'></i>
              처리중...
            </span>
          ) : (
            <span>회원가입</span>
          )}
        </Button>
      </form>
    </>
  );
};
export default SignupForm;
