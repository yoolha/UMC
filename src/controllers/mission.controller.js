import { MissionService } from '../services/mission.service.js';

export const addMissionHandler = async (req, res) => {
  const { storeId, reward, deadline, missionSpec } = req.body;

  try {
    const addedMission = await MissionService.addMission({
      storeId,
      reward,
      deadline,
      missionSpec,
    });

    res.status(201).json({ message: '미션이 추가되었습니다.', mission: addedMission });
  } catch (error) {
    console.error('미션 추가 중 에러:', error);
    res.status(500).json({ error: '미션을 추가하는 중 에러가 발생했습니다.' });
  }
};
