/* eslint-disable no-console */

module.exports = options => {
  if (!options.format) {
    console.log('需要传递format 函数')
  }
  return async (ctx, next) => {
    console.log(options.format(ctx.url));
    await next();
  }
}