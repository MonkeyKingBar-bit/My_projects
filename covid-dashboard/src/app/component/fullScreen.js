const full = document.getElementById('full_screen');
const globalCases = document.getElementById('global_cases');

full.addEventListener('click', () => {
    globalCases.requestFullscreen();
  });

function fullScreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.webkitrequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.mozRequestFullscreen) {
      element.mozRequestFullScreen();
    }
  }
