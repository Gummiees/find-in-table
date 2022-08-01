

const input = document.getElementById('patientNumber');
input.addEventListener('keyup', (e) => onInputChanges(e.target.value));

const button = document.getElementById('createPatientButton');
button.addEventListener('click', createPatient);


function createPatient() {
  const patientNumber = document.getElementById('patientNumber').value;
  console.log('createPatient', patientNumber);
  if (patientNumber) {
    chrome.storage.sync.set({ patientNumber: patientNumber });
  } else {
    setErrorMessage('Please enter a patient number');
  }
}

function onInputChanges(val) {
  if (val) {
    button.disabled = false;
    setErrorMessage();
  } else {
    button.disabled = true;
  }
}

function setErrorMessage(message) {
  const errorMessage = document.getElementById('errorMessage');
  if (message) {
    errorMessage.innerText = message;
  } else {
    errorMessage.innerText = '';
  }
}