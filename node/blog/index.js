const koa = require('koa');
// const session = require('koa-session');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const router = require('./middleware/route');
const valiteCookie = require('./middleware/validateCookie');
const upload = require('./middleware/upload');
const {join} = require('path');
const app = new koa();

//app.keys = ['keys'];
//router.use(session(app));

app.use(views(join(__dirname, './static/html'), {extension: 'ejs'}));
app.use(bodyParser());
app.use(valiteCookie);
app.use(router.routes());
app.use(upload);

app.use(serve(join(__dirname, './static/html'), {extensions: ['html']}))

app.listen(3000, () => {
  console.log('Listening on 3000');
});