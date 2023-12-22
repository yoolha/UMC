import { MissionService } from '../services/challengemission.service.js';
import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';

export const challengeMissionHandler = async (req, res) => {
  try {
    const { userId, missionId } = req.body;
    const message = await MissionService.challengeMission(userId, missionId);
    res.status(201).send(response(status.SUCCESS, { message }));
  } catch (error) {
    console.error('미션 도전 중 에러:', error);
    res.status(400).send(response(status.BAD_REQUEST, null, error.message));
  }
};
