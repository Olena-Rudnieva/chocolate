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
  let pagePosition = window.scrollY;
  body.classList.add('desable-scroll');
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + 'px';
}
function enableScroll() {
  let pagePosition = parseInt(body.dataset.position, 10);
  body.classList.remove('desable-scroll');
  body.style.top = 'auto';
  window.scroll({ top: pagePosition, left: 0 });
  body.removeAttribute('data - position');
}

console.log(btnOff);

btnOff.addEventListener('click', () => {
  console.log('1');

  desableScroll();
});

btnOn.addEventListener('click', () => {
  enableScroll();
});
