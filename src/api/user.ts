import axios from 'axios';

export const getUsers = () => {
  return axios.get('https://evoteam-verasoft.github.io/data/summary.json');
};
