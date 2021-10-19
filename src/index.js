(() => {
  "use strict";

  if (
    !/^https:\/\/.+\.cybozu\.com\/g\/schedule\/view.csp/.test(location.href)
  ) {
    window.alert("このサイトでは実行できません。");
    return;
  }

  const customizeName = "jp.co.cybozu.garoon.questionnaire";
  const result = garoon.schedule.event.datastore.get(customizeName);
  console.log(result);
})();
