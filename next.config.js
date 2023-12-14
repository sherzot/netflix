/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {protocol: 'https', hostname: 'x'},
            {protocol: 'http', hostname: 'x'}
        ],
    }
}

module.exports = nextConfig
