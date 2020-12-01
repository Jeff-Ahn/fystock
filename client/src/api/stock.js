import axios from 'axios';

const stockInstance = axios.create({
  baseURL: '/find',
});

const stocksApi = {
  getAllStocks() {
    // return stockInstance.get('/');

    // dummy data
    return stockInstance.get('/');
  },
  getStock(id) {
    return stockInstance.get(`/${id}`);
  },
};

export default stocksApi;
