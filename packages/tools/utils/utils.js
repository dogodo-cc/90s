// 下载
const downFile = (fileName = '下载文件', content = 'download file is empty') => {
  const aLink = document.createElement('a');
  const blob = new Blob([content], {
      type: 'application/json',
  });
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);
  aLink.click();
  URL.revokeObjectURL(blob);
}

const downloadByLink = (link, config = { filename: null }) => {
  fetch(link).then(res => res.blob().then(blob => {
    const a = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = config.filename || link;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
}));
}

// 一维数组按个数排队
const lineArray = (arr = [], num = 2) => {
  let count = Math.round(arr.length / num);
  let result = [];
  for(let i = 0; i < count; i++) {
    result.push(arr.splice(0, num));
  }
  return result;
}

// 一维数组转为树形结构数组
const array2tree = (arr = [], config = {ID:'id',PID:'pid'}) => {
  const {ID, PID} = config;
  let roots = []
  let wait = {};

  arr.forEach(item => {
    item[ID] = String(item[ID]);// 把id都转为字符串，方便后面进行对比
     
    const pid = item[PID];
    if ( pid === undefined) {
      roots.push(item)
    } else {
      item[PID] = String(item[PID]); // 把pid都转为字符串，方便后面进行对比

      if (Array.isArray(wait[pid])) {
        wait[pid].push(item);
      } else {
        wait[pid] = [item];
      }
    }
  })

  function findParent(pid, children = [], roots = []) {
    roots.forEach(parent => {
      if(parent[ID] === pid) {
        parent.children = children;
        delete wait[pid]
      } else {
        if (Array.isArray(parent.children)) {
          findParent(pid, children, parent.children);
        }
      }
    });
  }
  
  while(Object.keys(wait).length) {
    Object.entries(wait).forEach(v => {
      const [pid, children] = v;
      findParent(pid, children, roots);
    })
  }
  return roots;
}

export {
  downFile,
  downloadByLink,
  lineArray,
  array2tree
}

