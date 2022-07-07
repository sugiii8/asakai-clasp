import { getEnv } from "./util";

const SHEET_ID_MEMBERS = getEnv("SHEET_ID_MEMBERS");
const SHEET_ID_TOPICS = getEnv("SHEET_ID_TOPICS");
const SHEET_ID_EXTRAS = getEnv("SHEET_ID_EXTRAS");
const SHEET_DATA_RANGE = "A:A"; // A列にデータ入れてる
const TEAM_NUMBER = 2; // 現在２チームに分かれて朝回
const EXTRA_ATARI_RARITY = 5; // 5%の確率でextraやる

type Members = Array<string>;
export type MembersOfEachTeam = {
  a: Members;
  b: Members;
};

const getMembersOfEachTeam = () => {
  const members = sheetData(SHEET_ID_MEMBERS, SHEET_DATA_RANGE);
  shuffle(members);
  const membersEachTeam = splitByTeam(members);

  return membersEachTeam;
};

const getTopicAtRandom = (): string => {
  const topics = sheetData(SHEET_ID_TOPICS, SHEET_DATA_RANGE);
  const topic = topics[Math.floor(Math.random() * topics.length)];

  return topic;
};

const getExtraContent = () => {
  // 20回のうち1回くらい特別コンテンツをやる
  const number = Math.floor(Math.random() * 100);
  if (number > EXTRA_ATARI_RARITY) {
    return null;
  }

  const extras = sheetData(SHEET_ID_EXTRAS, SHEET_DATA_RANGE);
  const extra = extras[Math.floor(Math.random() * extras.length)];

  return extra;
};

const sheetData = (sheetId: string, range: string): Array<string> => {
  const sheet = SpreadsheetApp.openById(sheetId);
  const data = sheet.getRange(range).getValues().filter(String).flat();
  return data;
};

const shuffle = (members: Members): void => {
  for (var i = members.length - 1; i > 0; i--) {
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = members[i];
    members[i] = members[r];
    members[r] = tmp;
  }
};

const splitByTeam = (members: Members): MembersOfEachTeam => {
  const half = Math.ceil(members.length / TEAM_NUMBER);
  const a = members.splice(0, half);
  const b = members.splice(-half);
  const membersOfEachTeam = {
    a: a,
    b: b,
  };

  return membersOfEachTeam;
};

export { getTopicAtRandom, getMembersOfEachTeam, getExtraContent };
