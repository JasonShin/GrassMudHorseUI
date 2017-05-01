import Base from '../Base';

class Input extends Base {
  constructor () {
    super();
    // creates a shadow root
    const shadow = this.attachShadow({mode: 'open'});
    const input = document.createElement('input');
    shadow.appendChild(input);
  }
}

customElements.define('mui-input', Input);

export default Input;
