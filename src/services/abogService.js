import apiClient from '@/services/http-common';
import { useQuery, useMutation } from '@tanstack/react-query';

// 아보그 조회
const useGetAbog = () => {
  return useQuery(['getAbog'], () => apiClient.get('/abogs'));
};

// 아보그 상세 조회
const useGetAbogDetail = (abogId) => {
  return useQuery(['getAbogDetail', abogId], () =>
    apiClient.get(`/abogs/${abogId}`),
  );
};

// 아보그 추가
const useCreateAbog = () => {
  return useMutation((abog) => apiClient.post('/abogs', abog), {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// 아보그 수정
const useUpdateAbog = () => {
  return useMutation((abog) => apiClient.put('/abogs', abog));
};

// 아보그 삭제
const useDeleteAbog = () => {
  return useMutation((abog) => apiClient.delete(`/abogs/${abog.id}`));
};

// 아보그 좋아요 토글
const useToggleAbogLike = () => {
  return useMutation((abogId) => apiClient.post(`/abogs/${abogId}/like`));
};

// 아보그 댓글 조회
const useGetAbogComments = (abogId) => {
  return useQuery(['getAbogComments', abogId], () =>
    apiClient.get(`/abogs/${abogId}/comments`),
  );
};

// 아보그 댓글 추가
const useAddAbogComment = () => {
  return useMutation((abogId, content) =>
    apiClient.post('/comments', { abogId, content }),
  );
};

// 아보그 댓글 삭제
const useDeleteAbogComment = () => {
  return useMutation((commentId) => apiClient.delete(`/comments/${commentId}`));
};

export default {
  useGetAbog,
  useGetAbogDetail,
  useCreateAbog,
  useUpdateAbog,
  useDeleteAbog,
  useToggleAbogLike,
  useGetAbogComments,
  useAddAbogComment,
  useDeleteAbogComment,
};
