export default {
  PORT: parseInt(process.env.PORT, 10) || 3000,
  DB_URL: process.env.DB_URL,
  HOST_MS: process.env.HOST_MS,
  PORT_MS: process.env.PORT_MS,
};
