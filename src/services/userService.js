import { API_ENDPOINTS } from '@/services/endpoints';
import apiClient from '@/services/http-common';
import { useQuery, useMutation } from '@tanstack/react-query';

const { USER_ENDPOINTS } = API_ENDPOINTS;
// 로그인 상태 확인
export const useCheckLogin = (email) => {
  return useQuery({
    queryKey: ['checkLogin', email],
    queryFn: () =>
      apiClient.get(USER_ENDPOINTS.CHECK_LOGIN, { params: { email } }),
  });
};

// 로그인
export const useLogin = () => {
  return useMutation({
    mutationFn: (user) => {
      return apiClient.post(USER_ENDPOINTS.LOGIN, user);
    },
  });
};

// 로그아웃
export const useLogout = () => {
  return useMutation({
    mutationFn: (user) => {
      return apiClient.post(USER_ENDPOINTS.LOGOUT, user);
    },
  });
};

// 회원가입
export const useSignup = () => {
  return useMutation({
    mutationFn: (user) => {
      return apiClient.post(USER_ENDPOINTS.SIGNUP, user);
    },
  });
};

// 닉네임 중복 확인
export const useCheckNickname = (nickname) => {
  return useQuery({
    queryKey: ['checkNickname', nickname],
    queryFn: () =>
      apiClient.get(USER_ENDPOINTS.CHECK_NICKNAME, { params: { nickname } }),
    enabled: false, // 초기 마운트 시에는 호출하지 않음
  });
};

// 이메일 중복 확인
export const useCheckEmail = (email) => {
  return useQuery({
    queryKey: ['checkEmail', email],
    queryFn: async () => {
      const res = await apiClient.get(USER_ENDPOINTS.CHECK_EMAIL, {
        params: { email },
      });
      return res;
    },
    enabled: false, // 초기 마운트 시에는 호출하지 않음
  });
};

// 회원 정보 수정
export const useUpdateUserInfo = () => {
  return useMutation({
    mutationFn: (formData) => {
      return apiClient.put(USER_ENDPOINTS.USER_INFO, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
  });
};

// 회원 탈퇴
export const useDeleteUser = () => {
  return useMutation({
    mutationFn: () => {
      return apiClient.delete(USER_ENDPOINTS.USER_INFO);
    },
  });
};

// 사용자가 좋아요한 관광지 목록 조회
export const useGetUserLikes = () => {
  return useQuery({
    queryKey: ['getUserLikes'],
    queryFn: () => apiClient.get(USER_ENDPOINTS.USER_LIKE),
  });
};

// 사용자가 남긴 리뷰 목록 조회
export const useGetUserReviews = () => {
  return useQuery({
    queryKey: ['getUserReviews'],
    queryFn: () => apiClient.get(USER_ENDPOINTS.USER_REVIEW),
  });
};

// 사용자의 아보그 목록 조회
export const useGetUserAbogs = () => {
  return useQuery({
    queryKey: ['getUserAbogs'],
    queryFn: () => apiClient.get(USER_ENDPOINTS.USER_ABOG),
  });
};

// 사용자 정보 조회
export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ['getUserInfo'],
    queryFn: () => apiClient.get(USER_ENDPOINTS.USER_INFO),
  });
};
