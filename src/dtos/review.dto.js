
export class ReviewDTO {
    constructor(storeId, score, content, image) {
      this.storeId = storeId;
      this.score = score;
      this.content = content;
      this.image = image;
    }
  
    static fromRequest(req) {
      const { storeId, score, content, image } = req.body;
      return new ReviewDTO(storeId, score, content, image);
    }
  }
  