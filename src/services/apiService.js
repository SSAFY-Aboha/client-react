import apiClient from '@/services/http-common';

const get = async (url, params = {}, options) => {
  return apiClient.get(url, { params }, options);
};

const post = async (url, data = {}, options) => {
  return apiClient.post(url, data, options);
};

const put = async (url, data = {}, options) => {
  return apiClient.put(url, data, options);
};

const del = async (url, options) => {
  return apiClient.delete(url, options);
};

export default {
  get,
  post,
  put,
  del,
};
