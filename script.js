// Simple interactivity for the demo buttons
const buttons = {
  btnMale: 'សំឡេងប្រុស [M] បានចាប់ផ្តើម...',
  btnFemale: 'សំឡេងស្ត្រី [F] បានចាប់ផ្តើម...',
  btnSync: 'Auto Sync កំពុងដំណើរការ...',
};

Object.keys(buttons).forEach((id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('click', () => {
    const original = el.innerHTML;
    el.innerHTML = '<span class="mic">⏳</span><span>' + buttons[id] + '</span>';
    el.disabled = true;
    setTimeout(() => {
      el.innerHTML = original;
      el.disabled = false;
    }, 1500);
  });
});
