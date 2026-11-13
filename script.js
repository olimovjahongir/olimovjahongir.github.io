const themeButton = document.getElementById('themeButton');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeButton.textContent = 'Light mode';
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const darkModeIsOn = document.body.classList.contains('dark');

  themeButton.textContent = darkModeIsOn ? 'Light mode' : 'Dark mode';
  localStorage.setItem('theme', darkModeIsOn ? 'dark' : 'light');
});

document.getElementById('year').textContent = new Date().getFullYear();
