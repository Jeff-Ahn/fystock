import axios from 'axios';

const stockInstance = axios.create({
  baseURL: '/find',
});

const stocksApi = {
  getAllStocks: async () => await stockInstance.get('/'),

  getStock: async (id) => await stockInstance.get(`/${id}`),

  filterStocks: async (filters) =>
    await stockInstance.post('/filtering', {
      filters,
    }),
};

export default stocksApi;
