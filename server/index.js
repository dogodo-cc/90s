/* eslint-disable */


const Koa = require('koa');
// const {userAgent} = require('koa-useragent');
const init = require('./egg');

const app = new Koa();
init(app);


app.use(async (ctx, next) => {
  console.log(ctx.service);
  console.log(ctx.config);
  ctx.type = 'application/json';
  ctx.body = ctx.service.user.getUser();
})


app.listen(3100);