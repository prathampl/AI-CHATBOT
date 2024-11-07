import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { processMessage } from './src/controllers/chatbotController';
import { errorHandler } from './src/middlewares/errorHandler';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chatbot', processMessage);

app.use(errorHandler); // Error handling middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
