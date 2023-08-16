(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// (() => {
//   const form = document.querySelector('.form');

//   form.addEventListener('submit', handleSubmit);

//   function handleSubmit(event) {
//     event.preventDefault();
//     const {
//       elements: { login, password },
//     } = event.currentTarget;

//     console.log(`Login: ${login.value}, Password: ${password.value}`);
//     event.currentTarget.reset();
//     const backdrop = document.querySelector('.backdrop');
//     backdrop.classList.toggle('is-hidden');
//   }
// })();

const btnOff = document.querySelector('.scroll-off');
const btnOn = document.querySelector('.scroll-on');
const body = document.body;

function desableScroll() {
  body.classList.add('desable-scroll');
}
function enableScroll() {
  body.classList.remove('desable-scroll');
}

console.log(btnOff);

btnOff.addEventListener('click', () => {
  console.log('1');

  desableScroll();
});

btnOn.addEventListener('click', () => {
  enableScroll();
});
