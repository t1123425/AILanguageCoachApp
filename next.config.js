/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    QUESTION_TEMPLATE:process.env.QUESTION_TEMPLATE
  }
}

module.exports = nextConfig
