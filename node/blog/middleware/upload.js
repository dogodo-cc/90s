
const formidable = require("formidable");
const dbAPI = require("./db");
const fs = require("fs");
const { join } = require('path');
async function dealUpload(ctx, next) {

  if (ctx.method == "POST" && ctx.path == "/upload") {
    var form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(ctx.req, async function (err, fields, files) {
      if (err) throw err;

      // console.log(files.file);
      console.log(fields);

      //更新博客列表
      const id = await dbAPI.insertBlogList(files.file.name, fields.kind);
      //将文件内容存入数据库
      dbAPI.saveBlog(join(__dirname, "../static/blogs/", files.file.name), id)
    });


    form.on("error", error => {
      ctx.body = error;
    })

  } else {
    await next();
  }
}

module.exports = dealUpload;