import Base from '../Base';

class Input extends Base {
  constructor () {
    super();
    console.log('yo');
  }
}

customElements.define('mui-input', Input);

export default Input;
