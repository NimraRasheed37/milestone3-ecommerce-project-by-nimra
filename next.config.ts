/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
      // This removes `data-testid` properties from production builds
      reactRemoveProperties: {
        properties: ['^data-testid$'],
      },
    },
  };
  
  export default nextConfig;
  