import { initTrigger } from "./trigger";
import { getExtraContent, getMembersOfEachTeam, getTopicAtRandom } from "./sheet";
import { timeLog } from "./util";
import { sendToSlack } from "./slack";
import { getMessage } from "./message";

// NOTE:
// app scriptのトリガーだと細かい時間が設定できないため、app scriptのトリガーで09:45に実行するトリガーを設定する
const timerMain = () => {
  initTrigger();
};

// initTriggerで実行する関数
const main = () => {
  try {
    timeLog();

    // お題選定
    const topic = getTopicAtRandom();
    Logger.log(topic);

    // チームメンバー取得
    const teamMembers = getMembersOfEachTeam();
    Logger.log(teamMembers);

    // 特別コンテンツ
    const extra = getExtraContent();
    Logger.log(extra);

    // メッセージ
    const message = getMessage(topic, teamMembers, extra);

    // slack
    sendToSlack(message);

    timeLog();
  } catch (error) {
    if (error instanceof Error) {
      sendToSlack(`error: ${error.message}`);
    }
  }
};

export { timerMain, main };
