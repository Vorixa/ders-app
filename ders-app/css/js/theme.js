// Butonu ve simgeyi seçiyoruz
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

// Kullanıcı daha önce dark mod seçtiyse onu hatırla
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  icon.classList.replace('fa-moon', 'fa-sun');
}

// Butona tıklanınca ne olacak?
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Simgeyi değiştir ve tercihi sakla
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
});