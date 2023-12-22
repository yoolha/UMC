import { pool } from '../../config/db.connect.js';
import { checkChallengeQuery, insertChallengeQuery } from './challengemission.sql.js';

export const checkIfMissionIsChallenged = async (userId, missionId) => {
  try {
    const [rows] = await pool.query(checkChallengeQuery, [userId, missionId]);
    return rows.length > 0;
  } catch (error) {
    throw new Error('도전 중인 미션을 확인하는 도중 에러가 발생했습니다.');
  }
};

export const addChallengeMission = async (userId, missionId) => {
  try {
    await pool.query(insertChallengeQuery, [userId, missionId]);
  } catch (error) {
    throw new Error('미션 도전 중 에러가 발생했습니다.');
  }
};
