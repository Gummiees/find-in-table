var audio = this.loadAudio();
var play = true;
idleListener();
listenToChromeStuff();

function listenToChromeStuff() {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => handleMessage(request.playAudio));
  chrome.storage.sync.get(['playAudio'], (result) => handleMessage(result.playAudio));
}

function handleMessage(playAudio) {
  play = playAudio;
  if (!play) {
    audio.pause();
  }
}

function idleListener() {
  chrome.idle.setDetectionInterval(15);
  chrome.idle.onStateChanged.addListener((state) => {
    if (state === 'idle' && play) {
      audio.play();
    }
  });
}

function loadAudio() {
  // Computer is locked, or the user was inactive for 5 minutes
  document.write('<audio id="audio" controls="controls">');
  document.write('<source id="audioSource" src=""></source>');
  document.write('</audio>');
  var audio = document.getElementById('audio');
  var source = document.getElementById('audioSource');
  source.src = chrome.extension.getURL('/assets/music.mp3');
  audio.load();
  return audio;
}
