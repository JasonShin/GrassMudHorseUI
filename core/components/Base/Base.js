class Base extends HTMLElement {
  constructor () {
    super();
  }
  getDefaultStyle () {
    const defaultTheme = document.styleSheets;
    console.log('default themes! ', defaultTheme);
  }
}

export default Base;
