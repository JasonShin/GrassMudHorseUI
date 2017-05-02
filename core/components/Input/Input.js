import Base from '../Base';

class Input extends Base {
  constructor () {
    super();
    const container = document.createElement('div');
    const input = document.createElement('input');
    container.appendChild(input);
    this.appendChild(input);
  }
}

customElements.define('mui-input', Input);

export default Input;
