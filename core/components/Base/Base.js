/**
 * Polyfill get element class
 * @returns {*}
 */
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
  /**
   * Base constructor
   */
  constructor () {
    super();
  }
}

export default Base;
