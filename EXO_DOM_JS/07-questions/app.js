// const btnOpen = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');

// function toggle(e) {
//   e.currentTarget.classList.toggle('show-text');
// }

// btnOpen.addEventListener('click', toggle);

questions.forEach(function (question) {
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click', function () {
    questions.forEach(function (question) {
      if (question.classList.contains('show-text')) {
        question.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});
