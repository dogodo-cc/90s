const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/90s',{useNewUrlParser:true,useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', err => {
  console.log(err);
})

db.once('open', () => {
  console.log('open')
})

var loginSchema = new mongoose.Schema({
  username: String,
  password: String
});

var login = db.model('login', loginSchema, 'login');


var blogListSchema = new mongoose.Schema({
  title: String,
  kind: String,
  id: String
})

var blogList = db.model('blogList', blogListSchema, 'blogList');
var user1 = new login({username: 'alan', password: '123'});
user1.save(err => {
  if(err) console.error(err);
  console.log('save')
})

var query = login.find({username: 'alan'});
query.then(doc => {
  console.log(doc);
})

async function getBlogList(kind) {
  let query = {};
  let results = [];
  if (kind != '/') {
    query = {kind};
  }
  results = await blogList.find(query);
  return results;
}