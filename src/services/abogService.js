import apiClient from '@/services/http-common';
import { useQuery, useMutation } from '@tanstack/react-query';

// 아보그 조회
export const useGetAbog = () => {
  return useQuery({
    queryKey: ['getAbog'],
    queryFn: () => apiClient.get('/abogs'),
  });
};

// 아보그 상세 조회
export const useGetAbogDetail = (abogId) => {
  return useQuery({
    queryKey: ['getAbogDetail', abogId],
    queryFn: () => apiClient.get(`/abogs/${abogId}`),
  });
};

// 아보그 추가
export const useCreateAbog = () => {
  return useMutation({
    mutationFn: (abog) => apiClient.post('/abogs', abog),
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// 아보그 수정
export const useUpdateAbog = () => {
  return useMutation({
    mutationFn: (abog) => apiClient.put('/abogs', abog),
  });
};

// 아보그 삭제
export const useDeleteAbog = () => {
  return useMutation({
    mutationFn: (abog) => apiClient.delete(`/abogs/${abog.id}`),
  });
};

// 아보그 좋아요 토글
export const useToggleAbogLike = () => {
  return useMutation({
    mutationFn: (abogId) => apiClient.post(`/abogs/${abogId}/like`),
  });
};

// 아보그 댓글 조회
export const useGetAbogComments = (abogId) => {
  return useQuery({
    queryKey: ['getAbogComments', abogId],
    queryFn: () => apiClient.get(`/abogs/${abogId}/comments`),
  });
};

// 아보그 댓글 추가
export const useAddAbogComment = () => {
  return useMutation({
    mutationFn: (params) =>
      apiClient.post('/comments', {
        abogId: params.abogId,
        content: params.content,
      }),
  });
};

// 아보그 댓글 삭제
export const useDeleteAbogComment = () => {
  return useMutation({
    mutationFn: (commentId) => apiClient.delete(`/comments/${commentId}`),
  });
};
