import Base from '../Base';

class Button extends Base {
  constructor () {
    super();
    // creates a shadow root
    const shadow = this.attachShadow({mode: 'open'});
    // Create a standard img element and set it's attributes.
    const button = document.createElement('button');
    button.innerText = 'BUTTOlol';
    shadow.appendChild(button);
    this.getDefaultStyle();
  }
}

customElements.define('mui-button', Button);

export default Button;
