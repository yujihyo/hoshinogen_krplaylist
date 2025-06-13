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

// script.js
function loadSection(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => {
      console.error(`Error loading ${file}:`, err);
    });
}

loadSection("section-01", "sections/section-01.html");
loadSection("section-02", "sections/section-02.html");
loadSection("section-03", "sections/section-03.html");
loadSection("section-04", "sections/section-04.html");
loadSection("section-05", "sections/section-05.html");
