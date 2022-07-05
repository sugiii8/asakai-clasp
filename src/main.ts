import { getMembersOfEachTeam, getTopicAtRandom } from "./sheet";
import { initTrigger } from "./trigger";
import { slack } from "./slack";
import { shuffle, splitTeam } from "./member";

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
}
