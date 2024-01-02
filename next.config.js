/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: '*.googleusercontent.com'
        },
        {
          hostname: 'my-linklist-app.s3.amazonaws.com',
        },
        {
          hostname: 'platform-lookaside.fbsbx.com',
        }
        
      ],
      
    }
  }
  
  module.exports = nextConfig
