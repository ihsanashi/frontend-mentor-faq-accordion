// TODO: Select all accordion elements
let accordions = document.querySelectorAll('.accordion');

// TODO: Loop through each accordion element and fire an event listener
for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', function () {
    let question = accordions[i].getElementsByClassName('question')[0];
    let answer = accordions[i].getElementsByTagName('p')[0];
    let icon = accordions[i].getElementsByTagName('img')[0];
    question.classList.toggle('active');
    icon.classList.toggle('rotate');
    answer.classList.toggle('show');
  });
}
