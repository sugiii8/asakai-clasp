import { initTrigger } from "./trigger";
import { getMembersOfEachTeam, getTopicAtRandom } from "./sheet";
import { timeLog } from "./util";
import { sendToSlack } from "./slack";

export const main = () => {
  timeLog();

  // タイマーセット
  initTrigger();

  // お題選定
  const topic = getTopicAtRandom();
  Logger.log(topic);

  // チームメンバー取得
  const teams = getMembersOfEachTeam();
  Logger.log(teams);

  // slack
  const message = "TEST"; // TODO TEST
  sendToSlack(message);

  timeLog();
};
