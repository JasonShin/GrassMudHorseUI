test('test button element definition', () => {
  var registeredCalled = false;
  var actualElementName = '';
  var actualProperties = {};

  document.registerElement = function (elementName, properties) {
    registeredCalled = true;
    actualElementName = elementName;
    actualProperties = properties;
  };

  require('./Button');

  expect(registeredCalled).toBe(true);
  expect(actualElementName).toBe('merino-button');
  expect(HTMLButtonElement.prototype.isPrototypeOf(actualProperties.prototype)).toBe(true);
});
