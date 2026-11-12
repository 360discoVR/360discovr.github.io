const languageSwitch = document.querySelector('[data-language-switch]');
const defaultLanguageUrl = languageSwitch.href;

function updateLanguageLink() {
  const destination = new URL(defaultLanguageUrl);
  destination.hash = window.location.hash;
  languageSwitch.href = destination.href;
}

window.addEventListener('hashchange', updateLanguageLink);
updateLanguageLink();
