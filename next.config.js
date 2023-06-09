/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    QUESTION_TEMPLATE:process.env.QUESTION_TEMPLATE,
    NEXT_REPLY:process.env.NEXT_REPLY,
    GET_NEXT_QUESTION:process.env.GET_NEXT_QUESTION,
    NEXT_PUBLIC_GA_MEASUREMENT_ID:process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  }
}

module.exports = nextConfig
