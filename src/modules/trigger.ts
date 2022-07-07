const initTrigger = () => {
  deleteTrigger();
  setTrigger();
};

const deleteTrigger = () => {
  const triggers = ScriptApp.getProjectTriggers();
  // setTriggerで登録したトリガーのみ削除
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() == "main") {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
};

const setTrigger = () => {
  const triggerDate = new Date();
  const week = triggerDate.getDay();
  if (week == 0 || week == 6) {
    // holiday no working
    return;
  }

  // 9:45朝会開始ちょっと前にお知らせ
  triggerDate.setHours(9);
  triggerDate.setMinutes(44);
  ScriptApp.newTrigger("main").timeBased().at(triggerDate).create();
};

export { initTrigger };
