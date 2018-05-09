
const video = document.querySelector('video');

const constraint = { audio: false, video: { width: 1280, height: 720 } };

const videoButton = document.getElementById('videoButton');
const screenShootButton = document.getElementById('screenShootButton');
const mainContainer = document.querySelector('.main-container');

navigator.mediaDevices.getUserMedia(constraint)
.then(function(mediaStream) {
  var video = document.querySelector('#stream-video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); });


let tracker;
let trackingTask;

videoButton.addEventListener('click', (e) => {
  e.target.className = 'ui teal button';
  screenShootButton.className = 'ui button';
  mainContainer.className = 'main-container video';

  const faceSquare = document.getElementById('videoFaceSquare');
  faceSquare.style.visibility = 'hidden';
  if (trackingTask) {
    trackingTask.stop();
  }

  tracker = new tracking.ObjectTracker(['face', 'eye', 'mouth']);
  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);
  
  tracker.on('track', function(event) {
    if (event.data.length === 0) {
      // No face were detected in this frame.
    } else {
      event.data.forEach(function(rect) {
        const offsetEyes = rect.height / 8;
        faceSquare.style.visibility = 'visible';
        faceSquare.style.top = (rect.y - offsetEyes)+ 'px';
        faceSquare.style.left = rect.x + 'px';
        faceSquare.style.width = rect.width + 'px';
        faceSquare.style.height = rect.height + 'px';
      });
    }
  });

  trackingTask = tracking.track('#stream-video', tracker);

});


screenShootButton.addEventListener('click', (e) => {
  e.target.className = 'ui teal button';
  videoButton.className = 'ui button';
  mainContainer.className = 'main-container screenshot';
  const button = document.getElementById('my-button');
  const faceSquare = document.getElementById('faceSquare');

  const canvas = window.canvas = document.querySelector('#screenshot-canvas');

  canvas.height = 0;

  if (trackingTask) {
    trackingTask.stop();
  }

  tracker = new tracking.ObjectTracker(['face', 'eye', 'mouth']);
  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);
  
  tracker.on('track', function(event) {
    if (event.data.length === 0) {
      // No face were detected in this frame.
      faceSquare.style.visibility = 'hidden';
    } else {
      event.data.forEach(function(rect) {
        const offsetEyes = rect.height / 8;
        faceSquare.style.visibility = 'visible';
        faceSquare.style.top = (rect.y - offsetEyes)+ 'px';
        faceSquare.style.left = rect.x + 'px';
        faceSquare.style.width = rect.width + 'px';
        faceSquare.style.height = rect.height + 'px';
      });
    }
  });

  button.addEventListener('click', async (e) => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    trackingTask = tracking.track('canvas', tracker);
  });
});

