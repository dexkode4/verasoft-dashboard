import axios from 'axios';

export const getOrders = () => {
  return axios.get('https://evoteam-verasoft.github.io/data/orders.json');
};


export const getUserSummaryData = () => {
    return axios.get('https://evoteam-verasoft.github.io/data/summary.json');
  };
  