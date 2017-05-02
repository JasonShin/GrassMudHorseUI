var proto = Object.create(HTMLButtonElement.prototype);

var MerinoButton = document.registerElement('merino-button', {
// TODO: Refactor it to have a div wrapper
// TODO: Prefer const than var
  prototype: proto,
  extends: 'button'
});

export default MerinoButton;
