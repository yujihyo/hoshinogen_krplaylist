// 섹션 로드 함수
function loadSection(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback(document.getElementById(id));
    })
    .catch(err => console.error(`Error loading ${file}:`, err));
}

// 좋아요(하트) 버튼 기능
function initLikeButtons(scope) {
  scope.querySelectorAll('.like-button').forEach(button => {
    const id = button.dataset.id;

    // 초기 상태 표시
    if (localStorage.getItem(`like-${id}`) === 'true') {
      button.textContent = '❤️';
    }

    button.addEventListener('click', () => {
      const liked = localStorage.getItem(`like-${id}`) === 'true';
      localStorage.setItem(`like-${id}`, (!liked).toString());
      button.textContent = liked ? '🤍' : '❤️';
    });
  });
}

// 더보기 버튼 기능
function initToggleButtons(scope) {
  scope.querySelectorAll('.section-wrapper').forEach(section => {
    const cards = section.querySelectorAll('.artist-card');
    const toggleBtn = section.querySelector('.toggle-button');

    if (!toggleBtn || cards.length <= 4) {
      if (toggleBtn) toggleBtn.style.display = 'none';
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
}

// 한 섹션 로딩 후 초기화
function initSection(sectionEl) {
  initToggleButtons(sectionEl);
  initLikeButtons(sectionEl);
}

// 섹션 파일들 로드
loadSection("section-01", "sections/section-01.html", initSection);
loadSection("section-02", "sections/section-02.html", initSection);
loadSection("section-03", "sections/section-03.html", initSection);
loadSection("section-04", "sections/section-04.html", initSection);
loadSection("section-05", "sections/section-05.html", initSection);
