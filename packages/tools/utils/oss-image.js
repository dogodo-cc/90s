// https://help.aliyun.com/document_detail/44686.html?spm=a2c4g.11186623.6.969.zd1Jpy

const processParamKey = "?x-oss-process=image";

// 判断是否支持webp格式
// function checkWebp() {
//     try {
//         return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0);
//     } catch (err) {
//         return false;
//     }
// }

/**
 * detect url is processed before
 * @param {string} url
 */
function isURlProcessed(url) {
  return url.indexOf(processParamKey) !== -1;
}

/**
 *
 * @param {string} url
 * @param {string} options - operation string, eg: '/resize,w_200'
 */
function formOSSURL(url, options) {
  if (isURlProcessed(url)) {
    return `${url}${options}`;
  }
  return `${url}${processParamKey}${options}`;
}

/**
 *
 * @param {string} url
 * @param {number} width
 * @param {number} [height]
 */

// const isWebp = checkWebp();
const needReturn = url => {
  return !url || url.indexOf("data:image/png;base64") === 0;
};
export function resize(url, width, height, toJPG = false, abandonDpr = false) {
  if (needReturn(url)) return url;

  const DPR = abandonDpr ? 1 : window.devicePixelRatio || 1;

  let options = "/resize";
  if (width) {
    options += `,w_${Math.round(width * DPR)}`;
  }
  if (height) {
    options += `,h_${Math.round(height * DPR)}`;
  }

  options += `,type_6/interlace,1`;

  if (toJPG) {
    options += `/format,jpg`;
  }
  return formOSSURL(url, options);
}

/**
 *
 * @param {string} url
 * @param {number} [x=0] - x position of point where crop start
 * @param {number} [y=0] - y position of point where crop start
 * @param {number} [width] - width of croped img
 * @param {number} [height]  - height of croped img
 */
export function crop(url, x = 0, y = 0, width, height) {
  let options = `/crop,x_${x},y_${y}`;

  if (width) {
    options += `w_${width}`;
  }
  if (height) {
    options += `w_${height}`;
  }

  return formOSSURL(url, options);
}
