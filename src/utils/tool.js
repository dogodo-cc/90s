/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate (data, id = 'id', pid = 'parentId') {
  var res = []
  var temp = {}
  for (var i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i]
  }
  for (var k = 0; k < data.length; k++) {
    if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
      if (!temp[data[k][pid]]['children']) {
        temp[data[k][pid]]['children'] = []
      }
      if (!temp[data[k][pid]]['_level']) {
        temp[data[k][pid]]['_level'] = 1
      }
      data[k]['_level'] = temp[data[k][pid]]._level + 1
      temp[data[k][pid]]['children'].push(data[k])
    } else {
      res.push(data[k])
    }
  }
  return res
}

/**
 * 从一个扁平的数组的转换为含有 children 字段的树形
 * @param arr
 * @param key 唯一标识的字段
 * @param parentKey 父级的字段名称
 */
export function makeTreeData(arr = [], key = 'deptId', parentKey = 'parentId') {

  return loopOne(loopOne(arr, key, parentKey).reverse(), key, parentKey);

  function loopOne(arr, key, parentKey) {
    let rt = [];

    arr.forEach(a => {
      if (!Array.isArray(a.children)) {
        a.children = [];
      }

      let one = deepFind(rt, key, a[parentKey]);

      if (one) {
        if (!Array.isArray(one.children)) {
          one.children = [];
        }
        one.children.push(a);
      } else {
        rt.push(a);
      }
    });

    return rt;
  }

  function deepFind(arr, key, parentValue) {
    let one = arr.find(a => a[key] === parentValue);

    if (one) {
      return one;
    }

    for (let i in arr) {
      let rt = deepFind(arr[i].children, key, parentValue);
      if (rt) {
        return rt;
      }
    }

    return;
  }
}

// data：带转换成树形结构的对象数组
// attributes：对象属性
export function toTreeData (data = [], attributes = {id: 'deptId',pid: 'parentId'}) {
  let resData = data;
  let tree = [];
  //找寻根节点
  for (let i = 0; i < resData.length; i++) {
    // 如果为根节点，那么pid 为 0 或者为null ，这需要和后台沟通清楚
    if (resData[i][attributes.pid] === 0 || resData[i][attributes.pid] === null) {
      tree.push( treeObj(resData[i]) );
      resData.splice(i, 1);
      i--;
    }
  }
  run(tree);

  //找寻子树
  function run(chiArr) {
    if (resData.length !== 0) {
      for (let i = 0; i < chiArr.length; i++) {
        for (let j = 0; j < resData.length; j++) {
          if (chiArr[i][attributes.id] === resData[j][attributes.pid]){ // 如果当前根节点的 id 和 子节点的 pid 匹配
            let obj = treeObj(resData[j]);
            chiArr[i].children.push(obj);
            resData.splice(j, 1);
            j--;
          }
        }
        if(chiArr[i].children && chiArr[i].children.length > 0){
          run(chiArr[i].children);
        }
      }
    }
  }
  return tree;
}

function treeObj(originObj = {}){
  let obj =JSON.parse(JSON.stringify(originObj));
  obj.children = [];
  return obj;
}

export function uuid(len = 8, radix = 16) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [], i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
  } else {
    // rfc4122, version 4 form
    var r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    // Fill in random data. At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random()*16;
        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join('');
}