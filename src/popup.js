const updateStatusLabel = () => {
  document.getElementById('status').innerHTML = 'Parameters have been set!';
};

const updateParams = () => {
  const values = {};
  for (const param of ['userName', 'pass', 'idNumber']) {
    values[param] = document.getElementById(param).value;
  }
  values['autoLogin'] = document.getElementById('autoLogin').checked

  chrome.storage.sync.set(values, function() {
    console.log('Updated all params to storage');
  });

  updateStatusLabel();
};

document.getElementById('save').addEventListener('click', updateParams);
