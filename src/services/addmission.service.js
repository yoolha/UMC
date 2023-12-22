import { MissionDAO } from '../models/addmission.dao.js';
import { MissionDTO } from '../dtos/addmission.dto.js';

export class MissionService {
  static async addMission(missionData) {
    try {
      const missionDTO = new MissionDTO(missionData);
      const savedMission = await MissionDAO.addMission(missionDTO);
      return savedMission;
    } catch (error) {
      throw new Error('미션을 추가하는 중에 문제가 발생했습니다.');
    }
  }
}
