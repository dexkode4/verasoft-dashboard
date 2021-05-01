import axios from 'axios';

export const getOrders = () => {
  return axios.get('https://evoteam-verasoft.github.io/data/orders.json');
};
