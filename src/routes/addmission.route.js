import express from 'express';
import { addMissionHandler } from '../controllers/addmission.controller.js';

export const addmissionRouter = express.Router();

// POST /store/:storeId/mission
addmissionRouter.post('/store/:storeId/mission', addMissionHandler);