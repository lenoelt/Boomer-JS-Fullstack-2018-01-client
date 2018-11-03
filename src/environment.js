let API_URL = 'http://localhost:3000';

console.log(process.env);
if (process.env.NODE_ENV === 'development') API_URL = 'http://localhost:3000';

if (process.env.NODE_ENV === 'production')
  API_URL = 'https://alexandremartins.net/api';

export { API_URL };
