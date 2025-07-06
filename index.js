document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('socialToggle');
  const dropdown = document.getElementById('socialDropdown');

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', () => {
    dropdown.style.display = 'none';
  });
});