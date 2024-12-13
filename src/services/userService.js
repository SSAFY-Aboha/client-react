import apiClient from '@/services/http-common';
import { useQuery, useMutation } from '@tanstack/react-query';

// 로그인 상태 확인
const useCheckLogin = (email) => {
  return useQuery(['checkLogin', email], () => {
    return apiClient.get('/users/check-email', { params: { email } });
  });
};

// 로그인
const useLogin = () => {
  return useMutation((user) => {
    return apiClient.post('/auth/login', user);
  });
};

// 로그아웃
const useLogout = () => {
  return useMutation((user) => {
    return apiClient.post('/auth/logout', user);
  });
};

// 회원가입
const useSignup = () => {
  return useMutation((user) => {
    return apiClient.post('/user/signup', user);
  });
};

// 닉네임 중복 확인
const useCheckNickname = (nickname) => {
  return useQuery(['checkNickname', nickname], () => {
    return apiClient.get('/users/check-nickname', {
      params: { nickname },
    });
  });
};

// 이메일 중복 확인
const useCheckEmail = (email) => {
  return useQuery(['checkEmail', email], () => {
    return apiClient.get('/users/check-email', { params: { email } });
  });
};

// 회원 정보 수정
const useUpdateUserInfo = () => {
  return useMutation((formData) => {
    return apiClient.put('/user/me', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  });
};

// 회원 탈퇴
const useDeleteUser = () => {
  return useMutation(() => {
    return apiClient.delete('/user/me');
  });
};

// 사용자가 좋아요한 관광지 목록 조회
const useGetUserLikes = () => {
  return useQuery('getUserLikes', () => {
    return apiClient.get('/user/likes');
  });
};

// 사용자가 남긴 리뷰 목록 조회
const useGetUserReviews = () => {
  return useQuery('getUserReviews', () => {
    return apiClient.get('/user/reviews');
  });
};

// 사용자의 아보그 목록 조회
const useGetUserAbogs = () => {
  return useQuery('getUserAbogs', () => {
    return apiClient.get('/user/abogs');
  });
};

// 사용자 정보 조회
const useGetUserInfo = () => {
  return useQuery('getUserInfo', () => {
    return apiClient.get('/user/me'); // 예시 URL
  });
};

export default {
  useCheckLogin,
  useLogin,
  useLogout,
  useSignup,
  useCheckNickname,
  useCheckEmail,
  useUpdateUserInfo,
  useDeleteUser,
  useGetUserLikes,
  useGetUserReviews,
  useGetUserAbogs,
  useGetUserInfo,
};
