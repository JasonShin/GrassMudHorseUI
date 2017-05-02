import Base from '../Base';

/**
 * Props: {
 *  placeholder: string, // placeholder string for input field
 * }
 */
class Input extends Base {
  /**
   * Input constructor
   */
  constructor () {
    super();
    // Renders Input
    this.render();
  }

  /**
   * Get placeholder property
   * @returns {*}
   */
  get placeholder () {
    return this.dataset['placeholder'];
  }

  /**
   * Component nder
   */
  render () {
    const { placeholder } = this.dataset;
    // Wrapper container
    const container = document.createElement('div');
    // Actual input
    const input = document.createElement('input');
    if (typeof placeholder !== 'undefined') {
      input.setAttribute('placeholder', placeholder);
    }
    // Append to the base
    container.appendChild(input);
    this.appendChild(input);
  }
}

customElements.define('mui-input', Input);

export default Input;
