// Your code goes here
function changeTextOnLoad() {
    document.addEventListener('DOMContentLoaded', function () {
      const paragraph = document.querySelector('p');
      paragraph.textContent = 'This is really cool!';
    });
  }