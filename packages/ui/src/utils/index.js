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

export {
  kebabCase,
  cloneDeep
}