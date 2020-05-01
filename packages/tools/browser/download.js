
const downloadByLink = (link, filename) => {
  fetch(link)
    .then(res => res.blob())
    .then(blob => {
      const a = document.createElement('a');
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = filename ?? link;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    });
}

const downloadByContent = (filename, content, type = 'application/json') => {
  if (!filename || !content || !type) {
    throw new Error('文件名、内容、类型均为必填项！');
  }
  const a = document.createElement('a');
  const blob = new Blob([content], {
    type,
  });
  a.download = filename;
  a.href = URL.createObjectURL(blob);
  a.click();
  URL.revokeObjectURL(blob);
}

export {
  downloadByLink,
  downloadByContent
}