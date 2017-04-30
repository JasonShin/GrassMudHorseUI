import skatejs from 'skatejs';



class Input extends Component {
  renderCallback () {
    return (
      <span>testing bro!</span>
    );
  }
}

customElements.define('mui-input', Input);

export default Input;
