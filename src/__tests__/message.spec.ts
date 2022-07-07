import "gas-mock-globals";

import { getMessage } from "../modules/message";
import { MembersOfEachTeam } from "../modules/sheet";

const topic = "TOPIC!";
const teamMembers: MembersOfEachTeam = {
  a: ["一郎", "二郎", "三郎"],
  b: ["四郎", "五郎", "六郎"],
};

test("通常メッセージ", () => {
  const noExtra = null;
  const message = getMessage(topic, teamMembers, noExtra);
  expect(message).toContain("今日のお題は");
  expect(message).toContain(teamMembers["a"][0]);
  expect(message).toContain(teamMembers["b"][0]);
  expect(message).not.toContain("特別コンテンツ");
});

test("特別コンテンツ", () => {
  const extra = "特別コンテンツ";
  const message = getMessage(topic, teamMembers, extra);
  expect(message).toContain("特別コンテンツ");
  expect(message).toContain(teamMembers["a"][0]);
  expect(message).toContain(teamMembers["b"][0]);
  expect(message).not.toContain("今日のお題は");
});
