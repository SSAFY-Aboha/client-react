import apiClient from '@/services/http-common';
import { useQuery, useMutation } from '@tanstack/react-query';

// 관광지 조회
export const useGetAttractions = (searchData) => {
  return useQuery({
    queryKey: ['getAttractions', searchData], //
    queryFn: () => apiClient.get('/attractions', { params: searchData }),
  });
};

// 관광지 이름 조회
export const useGetAttractionName = (keyword) => {
  return useQuery({
    queryKey: ['getAttractionName', keyword],
    queryFn: () => apiClient.get('/attractions/search', { params: keyword }),
  });
};

// 관광지 상세 조회
export const useGetAttractionDetail = (attractionId) => {
  return useQuery({
    queryKey: ['getAttractionDetail'],
    queryFn: () => apiClient.get(`/attractions/${attractionId}`),
  });
};

// 시도 조회
export const useGetSido = () => {
  return useQuery({
    queryKey: ['getSido'],
    queryFn: () => apiClient.get('/sidos'),
  });
};

// 구군 조회
export const useGetGugun = (sidoCode) => {
  return useQuery({
    queryKey: ['getGugun', sidoCode],
    queryFn: () => apiClient.get('/guguns', { params: { sidoCode } }),
  });
};

// 관광지 카테고리 조회
export const useGetContentType = () => {
  return useQuery({
    queryKey: ['getContentType'],
    queryFn: () => apiClient.get('/contenttypes'),
  });
};

// 관광지 추천 조회
export const usePostSuggestAttraction = () => {
  return useMutation({
    mutationFn: (pickedData) => apiClient.post('/recommendations', pickedData),
  });
};

// 관광지 후기 조회
export const useGetAttractionReview = (attractionId) => {
  return useQuery({
    queryKey: ['getAttractionReview', attractionId],
    queryFn: () => apiClient.get(`/reviews/${attractionId}`),
  });
};

// 관광지 후기 작성
export const usePostAttractionReview = () => {
  return useMutation({
    mutationFn: (reviewData) => apiClient.post('/reviews', reviewData),
  });
};

// 관광지 후기 삭제
export const useDeleteAttractionReview = () => {
  return useMutation({
    mutationFn: (reviewId) => apiClient.delete(`/reviews/${reviewId}`),
  });
};

// 관광지 좋아요 토글
export const useToggleAttractionLike = () => {
  return useMutation({
    mutationFn: (attractionId) =>
      apiClient.post(`/attractions/${attractionId}/like`, null),
  });
};
