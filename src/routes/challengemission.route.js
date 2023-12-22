import express from 'express';
import { challengeMissionHandler } from '../controllers/challengemission.controller.js';

export const challengemissionRouter = express.Router();

challengemissionRouter.post('/challenge', challengeMissionHandler);

