const updateStatusLabel = () => {
  document.getElementById('status').innerHTML = 'ID Number has been set!';
};

const updateId = () => {
  const idNumber = document.getElementById('idNumber').value;
  chrome.storage.sync.set({idNumber: idNumber}, function() {
    console.log('idNumber has been set to ' + idNumber.slice(0, 4) + '..');
  });

  updateStatusLabel();
};

document.getElementById('save').addEventListener('click', updateId);
