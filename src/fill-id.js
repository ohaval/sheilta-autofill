(() => {
  chrome.storage.sync.get(['idNumber'], function(data) {
    if (!('idNumber' in data)) {
      console.log("'idNumber' wasn't found in storage");

    } else {
      const idElement = document.getElementById('p_mis_student');
      if (idElement == null) {
        console.log("Can't found element with id 'p_mis_student' in this page");

      } else {
        console.log(`Filling ID input box with ${data.idNumber.slice(0, 4)}..`);
        idElement.value = data.idNumber;
      }
    }
  });
})();
