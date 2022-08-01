(() => {
  listenToChromeStuff();
  
  function listenToChromeStuff() {
    chrome.storage.onChanged.addListener((changes) => {
      for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        if (key === 'patientNumber') {
          handleMessage(newValue);
        }
      }
    });
  }

  function handleMessage(patientNumber) {
    console.log('handleMessage', patientNumber);
    const container = document.querySelector('app-patients-enroll');
    if (!patientNumber || !container) {
      return;
    }

    const mrnInput = document.querySelector('[name="medicalRecordNumber"]');
    const birthInput = document.querySelector('[name="birthDate"]');
    const givenNameInput = document.querySelector('[name="givenName"]');
    const lastNameInput = document.querySelector('[name="familyName"]');
    const telephoneInput = document.querySelector('[name="telephone"]');
    const emailInput = document.querySelector('[name="email"]');
    const phq9Input = document.querySelector('[name="phq9Score"]');
    const phq9DateInput = document.querySelector('[name="phq9Date"]');
    const submitButton = document.querySelector('button[type="submit"]');


    mrnInput.value = patientNumber;
    lastNameInput.value = patientNumber;
    emailInput.value = `xavier.caro+stg2-${patientNumber}@koahealth.com`;
    birthInput.value = '19 May, 1990';
    givenNameInput.value = 'Test';
    telephoneInput.value = '1234567890';
    phq9Input.value = '5';
    phq9DateInput.value = '1 Aug, 2022';

    submitButton.click();
  }
})();