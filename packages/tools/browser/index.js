export * from './download'
export * from './platform'
export * from './storage-local'
export * from './storage-session'

// 复制功能
export function setClipboardText(text) {
  const id = 'mycustom-clipboard-textarea-hidden-id';
  let existsTextarea = document.getElementById(id);

  if (!existsTextarea) {
    var textarea = document.createElement('textarea');
    textarea.id = id;
    // Place in top-left corner of screen regardless of scroll position.
    textarea.style.position = 'fixed';
    textarea.style.top = '-1px';
    textarea.style.left = '-1px';

    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textarea.style.width = '1px';
    textarea.style.height = '1px';

    // We don't need padding, reducing the size if it does flash render.
    textarea.style.padding = 0;

    // Clean up any borders.
    textarea.style.border = 'none';
    textarea.style.outline = 'none';
    textarea.style.boxShadow = 'none';

    // Avoid flash of white box if rendered for any reason.
    textarea.style.background = 'transparent';
    document.body.appendChild(textarea);
    existsTextarea = document.getElementById(id);
  }

  existsTextarea.value = text;
  existsTextarea.select();

  return new Promise((resolve, reject) => {
    try {
      const status = document.execCommand('copy');
      if (status) {
        resolve();
      } else {
        reject(new Error('复制失败！'));
      }
    } catch (err) {
      reject(err);
    }
  });
}