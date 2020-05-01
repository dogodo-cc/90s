/* eslint no-console:0 */

import ReconnectingWebSocket from "reconnectingwebsocket";
const wsUrl = "wss://hudong.gaoding.com/";
let ws = new ReconnectingWebSocket(wsUrl);
let hander = {}; // 事件集合
// eslint-disable-next-line
let timer = null;

ws.onopen = () => {
  console.log("socket init success !!!!");

  timer = setInterval(() => {
    sendMsg({
      event: "ping",
      data: {
        message: "pong"
      }
    });
  }, 1000 * 7);
};

ws.onclose = () => {
  console.log("socket closed !!!!");
  timer = null;
};

ws.onmessage = res => {
  const { event, data } = JSON.parse(res.data);
  console.log(`接收信息 => 事件: ${event}, 内容: ${JSON.stringify(data)}`);
  if (Array.isArray(hander[event])) {
    hander[event].forEach(f => f(data));
  }
};

const sendMsg = data => {
  return Promise.try(() => {
    console.log(
      `发送信息 => 事件：${data.event} ,内容： ${JSON.stringify(data.data)}`
    );
    ws.send(JSON.stringify(data));
  });
};

export default {
  on: function(event, fn) {
    if (Array.isArray(hander[event])) {
      hander[event].push(fn);
    } else {
      hander[event] = [fn];
    }
  },
  off: function(event, fn) {
    if (Array.isArray(hander[event])) {
      if (fn) {
        let i = hander[event].findIndex(f => f === fn);
        hander[event].splice(i, 1);
      } else {
        hander[event] = [];
      }
    }
  },
  emit: function(data) {
    return sendMsg(data);
  }
};
