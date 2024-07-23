import axios from 'axios';
import { useState } from 'react';

// const axios = require('axios');

const useAxios = () => {
  const [data, setData] = useState(null);

  const doAxios = url => {
    console.log(`${url}?api_key=${import.meta.env.VITE_RIOT_KEY}`);

    axios
      .get(`${url}?api_key=${import.meta.env.VITE_RIOT_KEY}`)
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
