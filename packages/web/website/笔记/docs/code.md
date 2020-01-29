```
getWidth(type: MathMethods = 'min') {
    const { width, height, imgWidth, imgHeight } = this;
    // 比例差
    const proportion = (width / height) - (imgWidth / imgHeight);
    const _w = Math[type](width, imgWidth);
    const _h = Math[type](height, imgHeight);

    if (proportion > 0) {
        return imgWidth * _h / imgHeight;
    } else {
        return _w;
    }
}
```