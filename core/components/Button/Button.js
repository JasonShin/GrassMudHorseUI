var proto = Object.create(HTMLButtonElement.prototype);

// TODO: Refactor it to have a div wrapper
// TODO: Prefer const than var
var merinoButton = document.registerElement('mui-button', {
  prototype: proto,
  extends: 'button'
});

export default merinoButton;
