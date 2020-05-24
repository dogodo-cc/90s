# 自动生成树ID

```json
[
  {
    "name": "中国",
    "nodes": [
      {
        "name": "福建省",
        "nodes": [
          {
            "name": "厦门市"
          },
          {
            "name": "南平市",
            "nodes": [
              {
                "name": "建瓯市"
              }
            ]
          }
        ]
      },
      {
        "name": "浙江省"
      }
    ]
  }
]
```

```json
[
  {
    "id": "1",
    "name": "中国",
    "nodes": [
      {
        "id": "1-1",
        "name": "福建省",
        "nodes": [
          {
            "id": "1-1-1",
            "name": "厦门市"
          },
          {
            "id": "1-1-2",
            "name": "南平市",
            "nodes": [
              {
                "id": "1-1-2-1",
                "name": "建瓯市"
              }
            ]
          }
        ]
      },
      {
        "id": "1-2",
        "name": "浙江省"
      }
    ]
  }
]
```

```js
/* eslint-disable no-console */
/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');
const data = require('../ram-tree.json');

const makeTreeDataId = (data = [], id = []) => {
    return data.map((v, index) => {
        let _id = id.length ? [...id, ++index] : [++index];
        v = { id: _id.join('-'), ...v };

        if(v.nodes) {
            v.nodes = makeTreeDataId(v.nodes, _id);
        }
        return v;
    });
};

const tree = makeTreeDataId(data);


fs.writeFile(path.join(__dirname, 'ram-tree.json'), JSON.stringify(tree, null, 2), err => {
    if(err) throw err;
    console.log('done !');
});

```