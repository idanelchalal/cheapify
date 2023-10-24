/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },

    images: {
        domains: [
            'res.cloudinary.com',
            'hazihinamprod01.blob.core.windows.net',
            'lh3.googleusercontent.com',
            'img.rami-levy.co.il',
        ],
    },
}

module.exports = nextConfig
