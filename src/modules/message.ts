import { MembersOfEachTeam } from "./sheet";
import { getEnv } from "./util";

const roomA = getEnv("ROOM_A");
const roomB = getEnv("ROOM_B");

const getMessage = (topic: string, teamMembers: MembersOfEachTeam, extra: string | null): string => {
  const todoMessage = makeTodoMessage(topic, extra);
  const roomMassage = mekeRoomMessage(teamMembers);

  const message = `
    <!here> 朝会\n
    ${todoMessage}\n
    ${roomMassage}\n
  `;
  return message;
};

const makeTodoMessage = (topic: string, extra: string | null): string => {
  const todo = extra
    ? `
    特別コンテンツ\n
    ${extra}`
    : `
    今日のお題は\n
    ${topic}
  `;

  return todo;
};

const mekeRoomMessage = (teamMembers: MembersOfEachTeam) => {
  const teamA = teamMembers["a"];
  const teamB = teamMembers["b"];
  const message = `
    [Around ウール](${roomA})\n
    ${teamA.join("\n")}
    \n
    [Around アンゴラ](${roomB})\n
    ${teamB.join("\n")}
  `;
};

export { getMessage };
