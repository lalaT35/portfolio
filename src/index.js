  const menu = document.getElementById('mobile-menu');
  const nav = document.getElementById('navbar');

  menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Optional: close menu when a link is clicked
  document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      nav.classList.remove('active');
    });
  });
