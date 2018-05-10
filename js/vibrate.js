
const vibrateButton = document.getElementById('vibrate-button');

vibrateButton.addEventListener('click', (e) => {
  console.log('vibrate');
  window.navigator.vibrate(200);
});
