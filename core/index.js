import './setup';
document.addEventListener('DOMContentLoaded', function(event) {
  const defaultTheme = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
  console.log('default themes!2 ', defaultTheme);
});
