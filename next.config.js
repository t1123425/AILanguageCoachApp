/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    QUESTION_TEMPLATE:process.env.QUESTION_TEMPLATE,
    NEXT_REPLY:process.env.NEXT_REPLY
  }
}

module.exports = nextConfig
