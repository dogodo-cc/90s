/* eslint-disable */

const fs = require('fs');
const Koa = require('koa');
// const {userAgent} = require('koa-useragent');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const serve = require('koa-static');

const app = new Koa();
app.use(bodyParser());
app.use(router.routes());
// app.use(router.allowedMethods());

router.get('/', async (ctx, next) => {
  ctx.response.body =  `
  <h1>index</h1>
  <form action="/login" method="post">
    <label>name:</lable> <input name="name" /><br>
    <label>password:</lable><input name="password" type="password"/><br>
    <input type="submit" valut="submit"/>
  </form>
  `
})

router.post('/login', async(ctx, next) => {
  let name = ctx.request.body.name || '';
  let password = ctx.request.body.password || '';
  if (name === '123' && password === '456') {
    ctx.body = 'success'
  } else {
    ctx.body = 'login error'
  }
})

app.listen(3100);