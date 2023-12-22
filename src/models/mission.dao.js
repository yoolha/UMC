import { pool } from '../../config/db.connect.js';
import { BaseError } from '../../config/error.js';
import { status } from '../../config/response.status.js';
import { insertMissionSql } from './mission.sql.js';

export const MissionDAO = {
  async addMission(missionDTO) {
    try {
      const conn = await pool.getConnection();
      const { storeId, reward, deadline, missionSpec } = missionDTO;

      const result = await pool.query(insertMissionSql, [
        storeId,
        reward,
        deadline,
        missionSpec,
      ]);

      conn.release();
      return result;
    } catch (error) {
      throw new BaseError(status.PARAMETER_IS_WRONG);
    }
  },
};
