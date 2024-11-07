import { Request, Response } from 'express';
import { classifyIntent, extractEntities } from '../services/nlpService';

export const processMessage = async (req: Request, res: Response) => {
  const { message } = req.body;

  try {
    const intent = await classifyIntent(message);
    const entities = extractEntities(message);

    const response = `Intent: ${intent}, Entities: ${JSON.stringify(entities)}`;
    res.status(200).json({ response });

  } catch (error) {
    console.error("Error processing message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
