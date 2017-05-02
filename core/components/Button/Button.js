var proto = Object.create(HTMLButtonElement.prototype);

var MerinoButton = document.registerElement('merino-button', {
  prototype: proto,
  extends: 'button'
});

export default MerinoButton;
