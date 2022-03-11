/** @type {import('next').NextConfig} */
const nextConfig = {
  //   reactStrictMode: true,
  env: {
    API_URL: process.env.REACT_APP_API_URL,
    TEMP_TOKEN: process.env.REACT_APP_TEMP_TOKEN,
  },
};

module.exports = nextConfig;
