document.addEventListener('DOMContentLoaded', function() {
  console.log('我被执行了！');
  Array.from(document.querySelectorAll('img')).forEach(ele => {
    ele.remove();
  })
});
/**
 * 基础版快照方案
 * @param {HTMLElement} container
 * @param {object} options html2canvas相关配置
 */
 function convertToImage(container, options = {}) {
  return html2canvas(container, options).then(canvas => {
      const imageEl = Canvas2Image.convertToJPEG(canvas, canvas.width, canvas.height);
      console.log(imageEl);
      return imageEl;
  });
}
$(function(){
  $('title').html("欢迎 | 当曲云")
  console.log(convertToImage(document.body,{}))
});
