import IMask from 'imask';
const phoneMask = new IMask(document.querySelector('#phone'), {
  mask: '+{7}(000)000-00-00',
});

const form = document.querySelector('.form');
const nameInput = form.querySelector('#name');
const phoneInput = form.querySelector('#phone');
const checkbox = form.querySelector('.custom-checkbox__input');
const buttonForm = form.querySelector('.form__button');

const validateForm = (nameInput, phoneInput, checkbox) => {
  nameInput.addEventListener('input', (event) => {
    if (event.target.value.length >= 1) {
      nameInput.parentNode.classList.remove('invalid');
      nameInput.parentNode.classList.add('valid');
    }
    if (event.target.value.length === 0) {
      nameInput.parentNode.classList.remove('valid');
      nameInput.parentNode.classList.add('invalid');
    }
  });

  phoneInput.addEventListener('input', (event) => {
    if (event.target.value.length >= 16) {
      phoneInput.parentNode.classList.remove('invalid');
      phoneInput.parentNode.classList.add('valid');
    }
    if (event.target.value.length < 16) {
      phoneInput.parentNode.classList.remove('valid');
      phoneInput.parentNode.classList.add('invalid');
    }
  });

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      buttonForm.removeAttribute('disabled');
      checkbox.nextElementSibling.textContent = 'Отказываюсь';
    } else {
      buttonForm.setAttribute('disabled', 'true');
      checkbox.nextElementSibling.textContent = 'Согласен';
    }
  });
};

validateForm(nameInput, phoneInput, checkbox);
