const btnOpen = document.querySelector('.sidebar-toggle');

function open() {
  document.querySelector('.sidebar').classList.add('show-sidebar');
}

btnOpen.addEventListener('click', open);

const btnClose = document.querySelector('.close-btn');

function close() {
  document.querySelector('.sidebar').classList.remove('show-sidebar');
}

btnClose.addEventListener('click', close);
