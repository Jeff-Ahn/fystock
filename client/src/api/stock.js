import axios from 'axios';

const stockInstance = axios.create({
  baseURL: '/api/stocks',
});

const stocksApi = {
  getAllStocks() {
    // return stockInstance.get('/');

    // dummy data
    return [
      { _id: 1, stockName: '삼성전자' },
      { _id: 2, stockName: '카카오' },
      { _id: 3, stockName: 'NAVER' },
      { _id: 4, stockName: '현대차' },
      { _id: 5, stockName: '셀트리온' },
    ];
  },
  getStock(id) {
    return stockInstance.get(`/:${id}`);
  },
};

export default stocksApi;
