import { getMembersOfEachTeam, getTopicAtRandom } from "./modules/sheet";
import { initTrigger } from "./modules/trigger";
import { slack } from "./modules/slack";

function main() {
  // タイマーセット
  initTrigger();

  // お題選定
  const topic = getTopicAtRandom();
  console.log("topic", topic);

  // チームメンバー取得
  const teams = getMembersOfEachTeam();
  console.log("teams", teams);

  // slack
  const message = "TEST"; // TODO TEST
  slack(message);
}
