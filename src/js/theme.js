const switchTheme = document.querySelector('#theme-switch-toggle');
const bodyTag = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

bodyTag.classList.add(Theme.LIGHT);

const theme = localStorage.getItem('theme');

if (theme === Theme.DARK) {
  switchTheme.checked = true;
  bodyTag.classList.remove(Theme.LIGHT);
  bodyTag.classList.add(Theme.DARK);
}

switchTheme.addEventListener('change', onChangeTheme);

function onChangeTheme(evt) {
  if (evt.target.checked) {
    bodyTag.classList.remove(Theme.LIGHT);
    bodyTag.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyTag.classList.remove(Theme.DARK);
    bodyTag.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
