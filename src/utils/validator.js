export const emailValidator = async (value, checkEmail) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  // 이메일 형식 검증
  if (emailRegex.test(value)) {
    const res = await checkEmail(value);
    console.log('emailValidator', res);
    // if (!isAvailable) {
    //   console.log('이미 존재하는 이메일 입니다.');
    //   return {
    //     isValid: false,
    //     errorMsg: '이미 존재하는 이메일 입니다.',
    //   };
    // }
    return {
      isValid: true,
    };
  }
  // 이메일 형식 검증 실패
  return {
    isValid: false,
    errorMsg: '올바른 이메일 형식이 아닙니다.',
  };
};

export const passwordValidator = (value) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
  // 비밀번호 형식 검증
  if (passwordRegex.test(value)) {
    return {
      isValid: true,
    };
  }
  // 비밀번호 형식 검증 실패
  return {
    isValid: false,
    errorMsg:
      '비밀번호는 8자 이상이며, 영문, 숫자, 특수문자를 모두 포함해야 합니다.',
  };
};
