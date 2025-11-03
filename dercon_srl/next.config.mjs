/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,


    // Optimizar imágenes
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    },

    // Compilar paquetes externos
    transpilePackages: ['react-bootstrap'],

};

export default nextConfig;
