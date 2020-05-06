const Koa = require('koa');
const init = require('./egg');
const app = new Koa();
init(app);

app.use(async (ctx, next) => {
  console.log('service: ', ctx.service);
  console.log('config: ', ctx.config);
  ctx.type = "application/json";
  ctx.body = ctx.service.user.getUser();
})

app.listen(4000);