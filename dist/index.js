function getElementClass() {
  if (typeof HTMLElement !== 'function') {
    // case of Safari
    const BaseElement = () => {};
    BaseElement.prototype = document.createElement('div');
    return BaseElement;
  } else {
    return HTMLElement;
  }
}

class Base$1 extends getElementClass() {
  constructor() {
    super();
  }
  getDefaultStyle() {
    const defaultTheme = document.styleSheets;
    console.log('default themes! ', defaultTheme);
  }
}

class Button$1 extends Base$1 {
  constructor() {
    super();
    // creates a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    // Create a standard img element and set it's attributes.
    const button = document.createElement('button');
    button.innerText = 'BUTTOlol';
    shadow.appendChild(button);
    this.getDefaultStyle();
  }
}

customElements.define('mui-button', Button$1);

class Input$1 extends Base$1 {
  constructor() {
    super();
    // creates a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    const input = document.createElement('input');
    shadow.appendChild(input);
  }
}

customElements.define('mui-input', Input$1);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
