/* eslint-disable no-console */
/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

const array = [{
  id: 1,
  name: '蔬菜',
  order: 1
},
{
  id: 2,
  name: '土豆',
  pid: 1,
  order: 2
}, {
  id: 3,
  name: '豆角',
  pid: 1,
  order: 1
}, {
  id: 4,
  name: '水果',
  order: 2
},
{
  id: 5,
  pid: 2,
  name: '地瓜',
  order: 2
}
];

function array2tree(arr = [], config = {ID:'id',PID:'pid'}) {
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

let jsno = array2tree(array);

fs.writeFile(path.join(__dirname, 'tree.json'), JSON.stringify(jsno, null, 2), err => {
  if(err) console.log(err);
  console.log('done !');
})