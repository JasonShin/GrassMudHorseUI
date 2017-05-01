function getElementClass () {
  if (typeof HTMLElement !== 'function') { // case of Safari
    const BaseElement = () => {};
    BaseElement.prototype = document.createElement('div');
    return BaseElement;
  } else {
    return HTMLElement;
  }
}

class Base extends getElementClass() {
  constructor () {
    super();
  }
  getDefaultStyle () {
    const defaultTheme = document.styleSheets;
    console.log('default themes! ', defaultTheme);
  }
}

export default Base;
