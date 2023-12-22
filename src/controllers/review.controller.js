import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { ReviewService } from "../services/review.service.js"; // 리뷰 서비스를 가져옵니다.

export const addReviewHandler = async (req, res, next) => {
    console.log("리뷰를 추가하는 요청이 들어왔습니다!");
    console.log("body:", req.body); // 요청 body를 확인하기 위한 로그

    try {
        // 요청에서 필요한 데이터 추출
        const { storeId, score, content, image } = req.body;

        // 여기서 리뷰를 추가하는 로직을 수행한다고 가정
        const addedReview = await ReviewService({ storeId, score, content, image });

        // 리뷰 추가 후 응답
        res.send(response(status.SUCCESS, addedReview));
    } catch (error) {
        console.error("리뷰 추가 중 에러 발생:", error);
        res.status(500).send(response(status.SERVER_ERROR, null, "리뷰를 추가하는 중 에러가 발생했습니다."));
    }
}
