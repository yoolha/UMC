export class AddMissionDTO {
    constructor({ storeId, reward, deadline, missionSpec }) {
      this.storeId = storeId;
      this.reward = reward;
      this.deadline = deadline;
      this.missionSpec = missionSpec;
    }
  }
  