const slack = (message) => {
  const slackWebhookURL = process.env["SLACK_WEBHOOK_URL"]!;

  UrlFetchApp.fetch(slackWebhookURL, {
    method: "post",
    payload: JSON.stringify({
      text: message,
    }),
  });
};

export { slack };
