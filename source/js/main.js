const items = document.querySelectorAll('.aside-scale-item');
const progress = document.querySelector('.aside-progress');
const scrollbar = document.querySelector('.aside-scrollbar');

if (items.length && progress && scrollbar) {

  const sections = [...items].map(item =>
    document.getElementById(item.dataset.target)
  );

  items.forEach((item, index) => {

    item.addEventListener('click', () => {

      const section = sections[index];

      if (!section) return;

      section.scrollIntoView({
        behavior: 'smooth'
      });

    });

  });

  function updateProgress(index) {

    const maxMove =
      scrollbar.offsetHeight - progress.offsetHeight;

    const step = maxMove / (sections.length - 1);

    progress.style.top = `${index * step}px`;

  }

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      const index = sections.indexOf(entry.target);

      if (index === -1) return;

      items.forEach(el => el.classList.remove('active'));
      items[index].classList.add('active');

      updateProgress(index);

    });

  }, {
    rootMargin: "-50% 0px -50% 0px"
  });

  sections.forEach(section => {
    if (section) observer.observe(section);
  });
}
