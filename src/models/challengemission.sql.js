export const checkChallengeQuery = "SELECT * FROM challenge_mission WHERE user_id = ? AND mission_id = ?;";

export const insertChallengeQuery = "INSERT INTO challenge_mission (user_id, mission_id) VALUES (?, ?);";
