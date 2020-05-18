let API_URL = 'http://localhost:3001';

if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:3001';
}

if (process.env.NODE_ENV === 'production') {
  API_URL = 'https://alexandremartins.net';
}

export { API_URL };
