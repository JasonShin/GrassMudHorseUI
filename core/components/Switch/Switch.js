import Base from '../Base';
import guid from '../../utils/guid';

class Switch extends Base {
  constructor () {
    super();
    this.guid = guid();
    const container = document.createElement('div');
    container.innerHTML = `
      <input type="checkbox" id="${this.guid}" />
      <label for="${this.guid}" />
    `;
    this.appendChild(container);
  }
  get label () {
    return this._label;
  }
}

window.customElements.define('mui-switch', Switch);

export default Switch;
