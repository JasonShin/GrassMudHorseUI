var proto = Object.create(HTMLButtonElement.prototype);

var merinoButton = document.registerElement('mui-button', {
  prototype: proto,
  extends: 'button'
});

export default merinoButton;
