import { getEnv } from "./util";

const SPREAD_SHEET_ID = getEnv("SPREAD_SHEET_ID");
const SHEET_DATA_RANGE = "A:A"; // A列にデータ入れてる
const TEAM_NUMBER = 2; // 現在２チームに分かれて朝回
const EXTRA_ATARI_RARITY = 10; // 10%の確率でextraやる

type Members = Array<string>;
export type MembersOfEachTeam = {
  a: Members;
  b: Members;
};

const getMembersOfEachTeam = () => {
  const members = sheetData(SPREAD_SHEET_ID, "members", SHEET_DATA_RANGE);
  shuffle(members);
  const membersEachTeam = splitByTeam(members);

  return membersEachTeam;
};

const getTopicAtRandom = (): string => {
  const topics = sheetData(SPREAD_SHEET_ID, "topics", SHEET_DATA_RANGE);
  const topic = topics[Math.floor(Math.random() * topics.length)];

  return topic;
};

const getExtraContent = () => {
  // 20回のうち1回くらい特別コンテンツをやる
  const number = Math.floor(Math.random() * 100);
  if (number > EXTRA_ATARI_RARITY) {
    return null;
  }

  const extras = sheetData(SPREAD_SHEET_ID, "extras", SHEET_DATA_RANGE);
  const extra = extras[Math.floor(Math.random() * extras.length)];

  return extra;
};

const sheetData = (spreadSheetId: string, sheetName: string, range: string): Array<string> => {
  const spreadSheet = SpreadsheetApp.openById(spreadSheetId);
  const sheet = spreadSheet.getSheetByName(sheetName);
  if (!sheet) {
    console.error("該当のsheetがありません");
    throw Error;
  }

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
