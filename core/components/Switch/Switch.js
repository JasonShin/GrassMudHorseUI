import Base from '../Base';
import html from '../../utils/html';

class Switch extends Base {
  /**
   * Constructs switch
   */
  constructor () {
    super();
    this.render();
  }

  /**
   * Renders component
   */
  render () {
    const elm = html.encodeHTML(`
      <div>
        <span>yo?</span>
        <span>yo?</span>
      </div>
    `);
    this.appendChild(elm);
  }
}

customElements.define('mui-switch', Switch);

export default Switch;
