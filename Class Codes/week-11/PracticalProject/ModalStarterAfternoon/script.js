'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpen = document.querySelectorAll('.show-modal');
const btnClose = document.querySelector('.close-modal');

const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener('click', open);
}

btnClose.addEventListener('click', close);

overlay.addEventListener('click', close);
