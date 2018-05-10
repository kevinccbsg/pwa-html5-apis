
const voiceButton = document.getElementById('voice-button');
const microphoneIcon = document.getElementById('microphone-icon');

const initMessage = document.getElementById('voiceText').innerHTML;

voiceButton.addEventListener('click', (e) => {
  startDictation(microphoneIcon);
});

function startDictation(icon) {
  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.lang = "en-US";
    recognition.start();
    icon.className = 'icon microphone';

    recognition.onresult = function(e) {
      let currentHTML = document.getElementById('voiceText').innerHTML;
      if (currentHTML !== initMessage) {
        currentHTML = currentHTML + '' + e.results[0][0].transcript;
      } else {
        currentHTML = e.results[0][0].transcript;
      }
      document.getElementById('voiceText').innerHTML = currentHTML;
      console.log('is going to end');
      recognition.stop();
      icon.className = 'icon microphone slash';
    };
    recognition.onerror = function(e) {
      console.log(e);
      recognition.stop();
      icon.className = 'icon microphone slash';
    }
  }
};
