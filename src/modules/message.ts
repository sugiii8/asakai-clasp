import { MembersOfEachTeam } from "./sheet";
import { getEnv } from "./util";

const roomA = getEnv("ROOM_A");
const roomB = getEnv("ROOM_B");

const getMessage = (topic: string, teamMembers: MembersOfEachTeam, extra: string | null): string => {
  const todoMessage = makeTodoMessage(topic, extra);
  const roomMassage = extra ? "" : mekeRoomMessage(teamMembers); // 特別コンテンツのときは全員同じ部屋で行う

  const message = `
  <!here> 朝会
  ${todoMessage}
  ${roomMassage}`;

  return message;
};

const makeTodoMessage = (topic: string, extra: string | null): string => {
  const todo = extra
    ? `
特別コンテンツ！
【 *${extra}* 】`
    : `
今日のお題は...
【 *${topic}* 】`;

  return todo;
};

const mekeRoomMessage = (teamMembers: MembersOfEachTeam): string => {
  const teamA = teamMembers["a"];
  const teamB = teamMembers["b"];
  const message = `
<${roomA}|Aroundウール>
${teamA
  .map((member) => {
    return `* ${member}`;
  })
  .join("\n")}

------

<${roomB}|Around アンゴラ>
${teamB
  .map((member) => {
    return `* ${member}`;
  })
  .join("\n")}`;

  return message;
};

export { getMessage };
