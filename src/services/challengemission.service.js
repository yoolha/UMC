import { checkIfMissionIsChallenged, addChallengeMission } from '../models/challengemission.dao.js';
import { ChallengeMissionDTO } from '../dtos/challengemission.dto.js';

export class MissionService {
  static async challengeMission(userId, missionId) {
    const isChallenged = await checkIfMissionIsChallenged(userId, missionId);
    if (isChallenged) {
      throw new Error('이미 도전 중인 미션입니다.');
    }

    const challengeMissionDTO = new ChallengeMissionDTO(userId, missionId);
    await addChallengeMission(challengeMissionDTO.userId, challengeMissionDTO.missionId);

    return '미션 도전에 성공했습니다.';
  }
}
