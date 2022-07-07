import { initTrigger } from "./trigger";
import { getMembersOfEachTeam, getTopicAtRandom } from "./sheet";
import { timeLog } from "./util";
import { sendToSlack } from "./slack";

// NOTE:
// app scriptのトリガーだと細かい時間が設定できないため、app scriptのトリガーで09:45に実行するトリガーを設定する
const timerMain = () => {
  initTrigger();
};

const main = () => {
  timeLog();

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

export { timerMain, main };
