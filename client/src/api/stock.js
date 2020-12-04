import axios from 'axios';

const stockInstance = axios.create({
  baseURL: '/find',
});

const stocksApi = {
  getAllStocks() {
    return stockInstance.get('/');
  },
  getStock(id) {
    return stockInstance.get(`/${id}`);
  },
  filterStocks(filters) {
    return stockInstance.post('/filtering', filters);
  },
};

export default stocksApi;
