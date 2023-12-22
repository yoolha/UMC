export const insertMissionSql = `
  INSERT INTO missions (store_id, reward, deadline, mission_spec)
  VALUES (?, ?, ?, ?)
`;
