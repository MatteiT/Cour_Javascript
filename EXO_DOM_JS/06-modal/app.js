// sléectionner modal-btn,modal-overlay,close-btn
// éccouter les events sur modal-btn and close-btn
// quand l'utilisateur clique sur modal-btn ajouter .open-modal à modal-overlay
// quand l'utilisateur clique close-btn supprimer .open-modal de modal-overlay

const btnOpen = document.querySelector('.modal-btn');

function open() {
  document.querySelector('.modal-overlay').classList.add('open-modal');
}

btnOpen.addEventListener('click', open);

const btnClose = document.querySelector('.close-btn');

function close() {
  document.querySelector('.modal-overlay').classList.remove('open-modal');
}

btnClose.addEventListener('click', close);
