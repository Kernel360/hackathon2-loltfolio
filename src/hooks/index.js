import axios from 'axios';
import { useState } from 'react';
import { KEYS } from '../apis/index';

// const axios = require('axios');

const useAxios = () => {
  const API_KEY = KEYS;
  const [data, setData] = useState(null);

  const doAxios = url => {
    axios
      .get(`${url}?api_key=${API_KEY}`)
      .then(function (response) {
        // 성공 핸들링
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
  };

  return [data, doAxios];
};

export default useAxios;
