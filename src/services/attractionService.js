import apiClient from '@/services/http-common';
import { useQuery, useMutation } from '@tanstack/react-query';

// 관광지 조회
const useGetAttractions = (searchData) => {
  return useQuery(
    ['getAttractions', searchData], //
    () => apiClient.get('/attractions', { params: searchData }),
  );
};

// 관광지 이름 조회
const useGetAttractionName = (keyword) => {
  return useQuery(['getAttractionName', keyword], () =>
    apiClient.get('/attractions/search', { params: keyword }),
  );
};

// 관광지 상세 조회
const useGetAttractionDetail = (attractionId) => {
  return useQuery(['getAttractionDetail'], () =>
    apiClient.get(`/attractions/${attractionId}`),
  );
};

// 시도 조회
const useGetSido = () => {
  return useQuery(['getSido'], () => apiClient.get('/sidos'));
};

// 구군 조회
const useGetGugun = (sidoCode) => {
  return useQuery(['getGugun', sidoCode], () =>
    apiClient.get('/guguns', { params: { sidoCode } }),
  );
};

// 관광지 카테고리 조회
const useGetContentType = () => {
  return useQuery(['getContentType'], () => apiClient.get('/contenttypes'));
};

// 관광지 추천 조회
const usePostSuggestAttraction = () => {
  return useMutation((pickedData) =>
    apiClient.post('/recommendations', pickedData),
  );
};

// 관광지 후기 조회
const useGetAttractionReview = (attractionId) => {
  return useQuery(['getAttractionReview', attractionId], () =>
    apiClient.get(`/reviews/${attractionId}`),
  );
};

// 관광지 후기 작성
const usePostAttractionReview = () => {
  return useMutation((reviewData) => apiClient.post('/reviews', reviewData));
};

// 관광지 후기 삭제
const useDeleteAttractionReview = () => {
  return useMutation((reviewId) => apiClient.delete(`/reviews/${reviewId}`));
};

// 관광지 좋아요 토글
const useToggleAttractionLike = () => {
  return useMutation((attractionId) =>
    apiClient.post(`/attractions/${attractionId}/like`, null),
  );
};

export default {
  useGetAttractions,
  useGetAttractionName,
  useGetAttractionDetail,
  useGetSido,
  useGetGugun,
  usePostSuggestAttraction,
  useGetContentType,
  useGetAttractionReview,
  useDeleteAttractionReview,
  usePostAttractionReview,
  useToggleAttractionLike,
};
