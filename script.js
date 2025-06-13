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
      if (index >= 4) {
        card.classList.toggle('visible', expanded);
      }
    });
    toggleBtn.textContent = expanded ? '접기' : '더보기';
  });
});

document.querySelectorAll('.like-button').forEach(button => {
  const id = button.dataset.id;

  // 초기 상태 설정
  if (localStorage.getItem(`like-${id}`) === 'true') {
    button.textContent = '❤️';
  }

  button.addEventListener('click', () => {
    const liked = localStorage.getItem(`like-${id}`) === 'true';

    if (liked) {
      localStorage.setItem(`like-${id}`, 'false');
      button.textContent = '🤍';
    } else {
      localStorage.setItem(`like-${id}`, 'true');
      button.textContent = '❤️';
    }
  });
});
