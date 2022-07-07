import { MembersOfEachTeam } from "./sheet";
import { getEnv } from "./util";

const roomA = getEnv("ROOM_A");
const roomB = getEnv("ROOM_B");

const getMessage = (
  topic: string,
  members: MembersOfEachTeam,
  extra?: string
) => {
  const message = extra
    ? makeExtraMessage(extra)
    : makeGeneralMessage(topic, members);
};

const makeExtraMessage = (extra: string) => {};

const makeGeneralMessage = (topic: string, members: MembersOfEachTeam) => {};
