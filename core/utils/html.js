const encodeHTML = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/xml');
  return doc.firstChild;
};

export default {
  encodeHTML
};
