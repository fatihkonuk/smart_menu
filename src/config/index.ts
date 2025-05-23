export default {
  port: process.env.PORT || 5000,
  db: {
    uri: process.env.MONGODB_URI ,
  },
  gemini: {
    apiKey: process.env.GEMINI_API_KEY,
  },
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
    methods: process.env.CORS_METHODS || "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },
}