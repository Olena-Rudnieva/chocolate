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

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-sellers]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// Modal Buy now. Form data collection

// (() => {
//   const form = document.querySelector('.modal-form');

//   form.addEventListener('submit', handleSubmit);

//   function handleSubmit(event) {
//     event.preventDefault();
//     const {
//       elements: {
//         userName,
//         userSurname,
//         userEmail,
//         userPhone,
//         userCard,
//         userMessage,
//       },
//     } = event.currentTarget;

//     console.log(`Name: ${userName.value}`);
//     console.log(`Surname: ${userSurname.value}`);
//     console.log(`Email: ${userEmail.value}`);
//     console.log(`Phone number: ${userPhone.value}`);
//     console.log(`Card number: ${userCard.value}`);
//     console.log(`Comment: ${userMessage.value}`);

//     event.currentTarget.reset();
//     const backdrop = document.querySelector('.backdrop');
//     backdrop.classList.toggle('is-hidden');
//   }
// })();

// Prevent page scrolling when a modal is open

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

btnOff.addEventListener('click', () => {
  desableScroll();
});

btnOn.addEventListener('click', () => {
  enableScroll();
});
