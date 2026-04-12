/** @type {import('next').NextConfig} */
const nextConfig = {
    env: { EMAIL: process.env.EMAIL, EMAIL_PASSWORD: process.env.EMAIL_PASSWORD },
	output: "standalone"
	
};

export default nextConfig;
