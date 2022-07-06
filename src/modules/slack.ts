const slack = (message) => {
  const slackWebhookURL = ""; // TODO ENV

  UrlFetchApp.fetch(slackWebhookURL, {
    method: "post",
    payload: JSON.stringify({
      text: message,
    }),
  });
};

export { slack };
