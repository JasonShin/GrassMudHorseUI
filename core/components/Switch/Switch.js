import Base from '../Base';
import guid from '../../utils/guid';

class Switch extends Base {
  constructor () {
    super();
    const container = document.createElement('div');
    container.innerHTML = `
      test
      <input type="checkbox" id="${guid()}" />
    `;
    this.appendChild(container);
  }
  get label () {
    return this._label;
  }
}

window.customElements.define('mui-switch', Switch);

export default Switch;
