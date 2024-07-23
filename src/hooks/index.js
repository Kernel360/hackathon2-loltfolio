import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';

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
        console.log('do Axios End');
      });
  };

  const getAxios = useCallback(url => {
    doAxios(url);
  }, []);

  return { data, getAxios };
};

const useGetAxios = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const isLoading = data === null;
  const isError = error !== null;

  useEffect(() => {
    const getData = async url => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log('useGetAxios success');
        console.log(response.data);
      } catch (e) {
        setError(e);
        console.log('useGetAxios error');
        console.log(e);
      }
    };

    if (!data && !error) {
      console.log('getData work');
      getData(url);
    }
  }, [data, error, isError, isLoading, url]);

  return { data, error, isLoading, isError };
};

export { useAxios, useGetAxios };
