/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.dmca.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
