const router = require('koa-router')();
const dealUpload = require('./upload');
const dbAPI = require('./db');

router.get('/', async (ctx) => {
  ctx.redirect('/blogs');
});

router.get('/login', async (ctx, next) => {
  const title = 'login page';
  return ctx.render('login', { title });
});

router.post('/login', async (ctx, next) => {
  let { name, password } = ctx.request.body;
  const result = await dbAPI.validate(name, password);
  if (result) {
    ctx.cookies.set("LoginStatus", true, {
      maxAge: 60 * 1000 * 60,
    });
    ctx.redirect('/blogs');
  } else {
    ctx.body = "Login error"
  }
});

router.get("/blogs", async (ctx, next) => {
  const results = await dbAPI.getBlogList('/');
  return ctx.render('list', { results });
});

router.get("/blog/:id", async (ctx, next) => {
  let blogId = ctx.params.id;
  let content = await dbAPI.readBlog(blogId);
  ctx.body = content;
  await next();
});

router.get("/upload", async (ctx) => {
  ctx.redirect('/upload.html');
});

router.post("/upload", async (ctx, next) => {
  dealUpload(ctx, next)
});


module.exports = router;