import { getEnv } from "./util";

const slack = (message) => {
  const slackWebhookURL = getEnv("SLACK_WEBHOOK_URL");

  UrlFetchApp.fetch(slackWebhookURL, {
    method: "post",
    payload: JSON.stringify({
      text: message,
    }),
  });
};

export { slack };
