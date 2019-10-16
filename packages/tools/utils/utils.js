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

export {
  downFile
}

