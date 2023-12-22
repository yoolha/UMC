// review.route.js

import express from 'express';
import { addReviewHandler } from '../controllers/review.controller.js';

export const reviewRouter = express.Router();

// POST /store/:storeId/review
reviewRouter.post('/store/:storeId/review', addReviewHandler);