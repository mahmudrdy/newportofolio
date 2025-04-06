const toggleBtn = document.getElementById('toggleBtn');
const profileData = document.getElementById('profileData');

toggleBtn.addEventListener('click', () => {
  profileData.classList.toggle('show');
  toggleBtn.textContent = profileData.classList.contains('show') ? '✕' : 'Profile';
});

const navItems = document.querySelectorAll('#mobileNav .nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});