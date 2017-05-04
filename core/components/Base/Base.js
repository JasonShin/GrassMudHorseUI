class Base extends HTMLElement {
  constructor () {
    super();
  }
  getDefaultStyle () {
    const defaultTheme = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
    console.log('default themes! ', defaultTheme);
  }
}

export default Base;
