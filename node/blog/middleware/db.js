const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('数据库连接成功！！！');
})

const loginSchema = new mongoose.Schema({
  username: String,
  password: String
})

const blogSchema = new mongoose.Schema({
  content: String,
  id: String,
})

const blogListSchema = new mongoose.Schema({
  title: String,
  kind: String,
  id: String
})

const login = db.model('login', loginSchema, 'login');
const blog = db.model('blog', blogSchema, 'blog');
const blogList = db.model('blogList', blogListSchema, 'blogList');

// 预设一个账号
new login({username: 'koa', password: '123'}).save();

async function validateLogin(username,password){
  var pass = '';
  await login.find({username}).then(doc => {
    pass = doc[0].password;
  })
  return password === pass;
}

async function getBlogList(kind) {
  let query = {};
  let results = [];
  if (kind !== '/') {
    query = {kind}
  }
  results = await blogList.find(query);
  return results;
}

async function queryMaxId() {
  let temp = 0;
  await blogList.find({}).sort({'id': -1}).limit(1).then(doc => {
    if (doc.length > 0) {
      temp = doc[0].id
    } else {
      console.log('collection is empty');
    }
  })
  return temp;
}

async function insertBlogList(title, kind) {
  let value = await queryMaxId();
  let record = new blogList({title, kind, id: ++value});
  await record.save(err => {
    if (err) {
      return console.error(err);
    }
    console.log('insert done');
  })
  return value;
}

function deleteBlogId(id) {
  let query = {id};
  blogList.remove(query).then(doc => {
    console.log('done')
  })
}

function modifyBlogKind(id, kind) {
  let query = {id};
  blogList.findOneAndUpdate(query, {kind}).then(doc => {
    console.log('done');
  })
}

async function saveBlog(path, id) {
  let content = require('fs').readFileSync(path, {encoding: "UTF-8"});
  let query = new blog({content, id});
  await query.save(err => {
    if (err) return;
    console.log('save done');
  })
}

async function readBlog(id){
  let doc = await blog.find({id: +id});
  return doc[0].content;
}

module.exports = {
  validate:validateLogin,
  getBlogList,
  insertBlogList,
  deleteBlogId,
  modifyBlogKind,
  saveBlog,
  readBlog
};