const lightbulbs = document.querySelectorAll('.lightbulb');
const counter = document.querySelector('.subtitle');
let count = 0;

lightbulbs.forEach(lightbulb => {
  lightbulb.addEventListener('click', function() {
    count++;
    lightbulb.classList.toggle("active");
    counter.innerHTML = `You've clicked the lights ${count} times`;
  });
});

/*lightbulbs.forEach(lightbulb => {
  lightbulb.addEventListener('mouseover', function() {
    lightbulb.classList.toggle("active");
  });
});*/

/*lightbulbs.forEach(lightbulb => {
  lightbulb.addEventListener('mouseout', function() {
    lightbulb.classList.toggle("active");
  });
});*/