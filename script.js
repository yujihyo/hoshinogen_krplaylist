document.querySelectorAll('.section-wrapper').forEach(section => {
  const cards = section.querySelectorAll('.artist-card');
  const toggleBtn = section.querySelector('.toggle-button');

  if (cards.length <= 4) {
    toggleBtn.style.display = 'none'; // 카드가 8개 이하면 버튼 숨김
    return;
  }

  let expanded = false;

  toggleBtn.addEventListener('click', () => {
    expanded = !expanded;
    cards.forEach((card, index) => {
      if (index >= 8) {
        card.classList.toggle('visible', expanded);
      }
    });
    toggleBtn.textContent = expanded ? '접기' : '더보기';
  });
});
