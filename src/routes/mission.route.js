import express from 'express';
import { addMissionHandler } from '../controllers/mission.controller.js';

export const missionRouter = express.Router();

// POST /store/:storeId/mission
missionRouter.post('/store/:storeId/mission', addMissionHandler);