// review.service.js

import { ReviewDAO } from '../models/review.dao.js'; // Review DAO를 가져옵니다.
import { ReviewDTO } from '../dtos/review.dto.js'; // Review DTO를 가져옵니다.

export class ReviewService {
  static async addReview(reviewData) {
    try {
      const reviewDTO = new ReviewDTO(reviewData);
      const savedReview = await ReviewDAO.addReview(reviewDTO);
      return savedReview;
    } catch (error) {
      throw new Error('리뷰를 추가하는 중에 문제가 발생했습니다.');
    }
  }
}
