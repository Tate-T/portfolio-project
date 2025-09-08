
document.querySelectorAll('.faq__text-info').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq__quetions-item');
    const answer = item.querySelector('.faq__answer');
    const arrow = item.querySelector('.faq__arrow');

    answer.classList.add('open');
    arrow.classList.add('up');
  });
});
