import { getMembersOfEachTeam, getTopicAtRandom } from "./modules/sheet";
import { initTrigger } from "./modules/trigger";
import { slack } from "./modules/slack";
import { timeLog } from "./modules/util";

function main() {
  timeLog();

  // タイマーセット
  // initTrigger();

  // お題選定
  const topic = getTopicAtRandom();
  Logger.log("topic", topic);

  // チームメンバー取得
  const teams = getMembersOfEachTeam();
  Logger.log("teams", teams);

  // slack
  const message = "TEST"; // TODO TEST
  slack(message);

  timeLog();
}
