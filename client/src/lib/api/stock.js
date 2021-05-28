import axios from 'axios';

// 주식에 대한 정보를 백엔드에서 받아오기 위한 api 함수들
const stockInstance = axios.create({
  baseURL: '/find',
});

const stocksApi = {
  // 모든 주식 데이터를 가져온다. (Method: GET)
  getAllStocks: async () => await stockInstance.get('/'),

  // 특정 주식 데이터를 가져온다. (METHOD: GET, id: {종목코드}})
  getStock: async (id) => await stockInstance.get(`/${id}`),

  // 필터링된 결과 주식들을 가져온다. (METHOD: POST, filters: {필터링 조건})
  filterStocks: async (filters) =>
    await stockInstance.post('/filtering', {
      filters,
    }),
};

export default stocksApi;
