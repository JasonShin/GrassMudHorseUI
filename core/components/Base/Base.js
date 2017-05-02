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
}

export default Base;
