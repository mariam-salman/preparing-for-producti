document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('[data-cy$="-link"]');
  const pages = document.querySelectorAll('.page');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      pages.forEach(page => page.classList.remove('active'));
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const targetPageId = link.id.replace('-link', '-page');
      const targetPage = document.getElementById(targetPageId);
      if (targetPage) targetPage.classList.add('active');
    });
  });

  const createSetForm = document.getElementById('create-set-form');
  const setNameInput = document.getElementById('set-name');
  const setNameError = document.querySelector('[data-cy="set-name-error"]');
  const cardSetsContainer = document.getElementById('card-sets-container');

  if (createSetForm) {
    createSetForm.addEventListener('submit', (e) => {
      e.preventDefault();

      setNameInput.classList.remove('is-invalid');
      setNameError.textContent = '';

      const oldSuccess = document.querySelector('.success-message');
      if (oldSuccess) oldSuccess.remove();

      const setName = setNameInput.value.trim();

      if (setName === '') {
        setNameError.textContent = 'Error';
        setNameInput.classList.add('is-invalid');
        return;
      } else {
        setNameInput.classList.remove('is-invalid');
        setNameError.textContent = '';
      }

      const successMessage = document.createElement('div');
      successMessage.textContent = 'Set created';
      successMessage.setAttribute('data-cy', 'set-success'); 
      successMessage.classList.add('success-message');
      successMessage.style.color = 'green';
      successMessage.style.marginTop = '10px';

      cardSetsContainer.appendChild(successMessage);
      setNameInput.value = '';
    });
  }
});
