const kebabCase = (str) => {
  const hyphenateRE = /([^-])([A-Z])/g;
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase();
};

const cloneDeep = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const isEmptyElement = (c) => {
  return !(c.tag || (c.text && c.text.trim() !== ''));
}

const filterEmpty = (children = []) => {
  return children.filter(c => !isEmptyElement(c));
}

export {
  kebabCase,
  cloneDeep,
  filterEmpty
}