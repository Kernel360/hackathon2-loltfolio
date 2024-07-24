import axios from 'axios';

const cache = {};

const wrapPromise = promise => {
  let status = 'pending';
  let response;

  const suspender = promise.then(
    res => {
      status = 'success';
      response = res;
    },
    err => {
      status = 'error';
      response = err;
    },
  );

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };
  return { read };
};

const getFetchWithSuspense = url => {
  if (!cache[url]) {
    cache[url] = wrapPromise(
      axios
        .get(url)
        .then(response => response.data)
        .catch(error => {
          return Promise.reject(error);
        }),
    );
  }

  return cache[url];
};

export { getFetchWithSuspense };
