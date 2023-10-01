/** @type {import('next').NextConfig} */
/* Конфигурационный файл Next.js */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    /* Настройки локали */
    locales: ["zh-Hant", "zh-Hans", "en", "jp", "fr", "ko"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
