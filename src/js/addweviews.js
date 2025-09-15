  const form = document.querySelector('.addrewiews__form');
  const modal = document.getElementById('cooperationModal');
  const closeBtn = document.querySelector('.modal__close');
  const overlay = document.querySelector('.modal__overlay');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    modal.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    modal.classList.remove('active');
  });



