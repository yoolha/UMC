// review.dao.js

import { pool } from "../../config/db.connect.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertReviewSql } from "./review.sql.js";

// 리뷰 데이터 삽입
export const ReviewDAO = async (data) => {
    try {
        const conn = await pool.getConnection();

        const result = await pool.query(insertReviewSql, [data.storeId, data.score, data.content, data.image]);

        conn.release();
        return result[0].insertId;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}