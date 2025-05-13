import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBURL = process.env.DBURL;
if (!DBURL) {
  throw new Error('DBURL is not defined in .env file');
}

mongoose.connect(DBURL)
  .then(() => console.log(`DB Connected! ${DBURL}`))
  .catch((err) => console.error('DB Connection Error:', err));
