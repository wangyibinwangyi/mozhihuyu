document.addEventListener('DOMContentLoaded', function() {
  console.log('我被执行了！');
  Array.from(document.querySelectorAll('img')).forEach(ele => {
    ele.remove();
  })
});
$(function(){
  $('title').html("欢迎 | 当曲云")
});
