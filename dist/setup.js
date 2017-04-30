class Base$1 extends HTMLElement {
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
    const span = document.createElement('span');
    span.innerHTML = `
      <div>
       yoyoyoaaxxxzzzzzcccxxccZXCZXCzzzcccvvvZZ
      </div>
    `;
    shadow.appendChild(span);
  }
}

customElements.define('x-product', Button$1);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
