// Initialize button with user's preferred color
const playAudioElement = document.getElementById('playAudio');
playAudioElement.onclick = (val) => changePlayValue(val.currentTarget.checked);

playAudioElement.checked = true;

function changePlayValue(val) {
  chrome.runtime.sendMessage({ playAudio: val });
  chrome.storage.sync.set({ playAudio: val });
}

chrome.storage.sync.get(['playAudio'], (result) => {
  if (result.playAudio === undefined || result.playAudio === null) {
    playAudioElement.checked = true;
    changePlayValue(true);
  } else {
    playAudioElement.checked = result.playAudio;
  }
});
