
function validateCookie(ctx,next){
  if(!(ctx.cookies.get("LoginStatus")) && ctx.url!="/login"){
    console.log("cookies 验证未通过");
    ctx.redirect("/login")
  } else {
    return next();
  }
}

module.exports = validateCookie;


