var proto = Object.create(HTMLButtonElement.prototype);

var merinoButton = document.registerElement('merino-button', {
  prototype: proto,
  extends: 'button'
});

export default merinoButton;
