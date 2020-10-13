
// 一维数组按个数排队
const lineArray = (arr = [], num = 2) => {
  let count = Math.round(arr.length / num);
  let result = [];
  for(let i = 0; i < count; i++) {
    result.push(arr.splice(0, num));
  }
  return result;
}

const makeArrayLine = (arr = [], lines = 2) => {
  let perLine = Math.round(arr.length / lines);
  let result = [];
  for(let i = 0; i < lines; i++) {
    result.push(arr.slice(i * perLine, (i+1) * perLine));
  }
  return result;
}

/**
 * 将一纬数组转为树形结构的数组
 * @param {array} arr 需要转换的一维数组
 * @param {string} idKey ID字段
 * @param {string} parentIdKey 父ID字段
 */
const array2tree = (arr = [], idKey = 'id', parentIdKey = 'pid', childrenKey = 'children') => {

  const roots = []
  const wait = {};

  arr.forEach(item => {
    const parentId = item[parentIdKey];

    // 找不到父id，视为根级元素
    if (parentId === undefined) {
      roots.push(item)
    } else {
      if (Array.isArray(wait[parentId])) {
        wait[parentId].push(item);
      } else {
        wait[parentId] = [item];
      }
    }
  })

  function findParent(parentId, children = [], roots = []) {
    roots.forEach(parent => {
      if (String(parent[idKey]) === parentId) {
        parent[childrenKey] = children;
        delete wait[parentId]
      } else {
        if (Array.isArray(parent[childrenKey])) {
          findParent(parentId, children, parent[childrenKey]);
        }
      }
    });
  }
  
  while(Object.keys(wait).length) {
    Object.entries(wait).forEach(([parentId, children]) => {
      findParent(parentId, children, roots);
    })
  }
  return roots;
}

export {
  lineArray,
  array2tree,
  makeArrayLine
}

