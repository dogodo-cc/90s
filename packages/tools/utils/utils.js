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


const lineArray = (arr = [], num = 2) => {
  let count = Math.round(arr.length / num);
  let result = [];
  for(let i = 0; i < count; i++) {
    result.push(arr.splice(0, num));
  }
  return result;
}

export {
  downFile,
  lineArray
}

