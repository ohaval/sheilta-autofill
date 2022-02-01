let submit = true;

(() => {
  const paramToElementMap = {
    'userName': 'p_user',
    'pass': 'p_sisma',
    'idNumber': 'p_mis_student',
  };

  chrome.storage.sync.get(Object.keys(paramToElementMap), function(data) {
    for (const key in paramToElementMap) {
      if (!(key in data)) {
        console.log(`${key} wasn't found in storage`);
        submit = false;

      } else {
        const element = document.getElementById(paramToElementMap[key]);

        if (element == null) {
          submit = false;
          console.log(
              `can't found element with id '${paramToElementMap[key]}'`);
        } else {
          console.log(`Filling ${paramToElementMap[key]} input`);

          element.value = data[key];
        }
      }
    }
  });
})();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  await sleep(250);
  if (submit) {
    chrome.storage.sync.get('autoLogin', function(data) {
      if ('autoLogin' in data && data['autoLogin']) {
        document.getElementById('login_sso').submit();
      }
    })
  }
})();
