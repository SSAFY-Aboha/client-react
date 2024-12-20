import { create } from 'zustand';

const useUserStore = create((set) => ({
  // ? state
  userInfo: {
    // 로그인 되었을 때, 저장될 user의 정보
    nickname: '',
    email: '',
    save: false,
    profileImageUrl: null,
  },

  isAuthenticated: false, // 로그인 되어있는 상탠

  // ? action
  // Login 성공 시 user 정보를 set 하는 action
  setUserInfo: (userInfo, onSuccess) => {
    set({
      userInfo: {
        ...userInfo,
      },
      isAuthenticated: true,
    });

    // callback 함수 전달 시 실행
    onSuccess && onSuccess();
  },

  // logout 시 user 정보와, 인증상태를 제거시키는 함수
  setLogout: () =>
    set({
      userInfo: {
        nickname: '',
        email: '',
        save: false,
        profileImageUrl: null,
      },
      isAuthenticated: false,
    }),
}));

export default useUserStore;
