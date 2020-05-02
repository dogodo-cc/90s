
const pic = {
  "avatar": "https://st-gdx.dancf.com/templets/105820/shots/20190717-195604-sTPxC.png?x-oss-process=image/resize,w_100/interlace,1,image/format,jpg",
  "userName": "sharon",
  "isImg": true,
  "pic": "https://st-gdx.dancf.com/gaodingx/69/design/20190726-231050-b6a2.png?x-oss-process=image/resize,w_428/interlace,1,image/format,jpg"
};
const a = Array(20).fill({
  "avatar": "https://avatars1.githubusercontent.com/u/35713518?s=400&u=dbae29ff6dea426f2ff23e213bac56b351b2edcc&v=4",
  "userName": "元帅",
  "msg": "博饼状元是我的！！！"
});
const b = Array(20).fill({
  "avatar": "https://st-gdx.dancf.com/templets/105817/shots/20190724-205406-EprBW.png?x-oss-process=image/resize,w_100/interlace,1,image/format,jpg",
  "userName": "蛋丁",
  "msg": "别废话盘他!!"
})
const c = Array(20).fill({
  "avatar": "https://st-gdx.dancf.com/templets/63097/shots/20181101-101538-_h8T3.png?x-oss-process=image/resize,w_100/interlace,1,image/format,jpg",
  "userName": "肉泥",
  "msg": "今天又是愉快的一天！！"
})
const danmakus = [];
a.forEach((item,index) => {
  danmakus.push(item);
  danmakus.push(b[index])
  danmakus.push(c[index])
});
export {
  danmakus,
  pic
};