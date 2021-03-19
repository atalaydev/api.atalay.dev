const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    MONGOOSE: {
      URL: process.env.MONGO_URL,
      OPTIONS: {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    }
  };