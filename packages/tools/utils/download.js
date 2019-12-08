const downloadImage = (url) => {
    return new Promise((resolve, reject) => {
        // 加载图片获取图片真实宽度和高度
        const image = new Image();
        image.onload = function() {
            const {
                width,
                height,
                naturalWidth,
                naturalHeight,
            } = image;
            resolve({
                width: naturalWidth || width,
                height: naturalHeight || height,
            });
        };
        image.onerror = reject;
        image.src = url;
    });
}

// 下载
const downFile = (fileName = '下载文件', content = 'download file is empty') => {
  const aLink = document.createElement('a');
  const blob = new Blob([content], {
      type: 'application/json',
  });
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);
  aLink.click();
  URL.revokeObjectURL(blob);
}

const downloadByLink = (link, config = { filename: null }) => {
  fetch(link).then(res => res.blob().then(blob => {
    const a = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = config.filename || link;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
}));
}

export {
  downloadImage,
  downFile,
  downloadByLink
}