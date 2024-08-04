/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'http',
                hostname:'image.pexels.com',
            }
        ]
    }
};

export default nextConfig;
