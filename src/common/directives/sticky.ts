export default {
  mounted(el: HTMLElement, binding: any) {
    const { top, width, right, left, height } = binding.value || {};
    const divOffsetTop = height || 1098;
    window.addEventListener('scroll',function(){
			const div = el;
			// 计算页面滚动了多少（需要区分不同浏览器）
		 	var topVal = 0;
		 	if(window.pageYOffset){//这一条滤去了大部分， 只留了IE678
				topVal = window.pageYOffset;
			}
			else if(document.documentElement.scrollTop ){//IE678 的非quirk模式
				topVal = document.documentElement.scrollTop;
			}
		 	if(topVal <= divOffsetTop){
		 		div.style.position = 'static';
        div.style.width = width || '100%';
		 	}
		 	else {
		 		div.style.position = 'fixed';
        div.style.width = width || '100%';
        div.style.top = top || '0';
        if (right) {
          div.style.right = right;
        }
        if (left) {
          div.style.left = left;
        }
        div.style.zIndex = '9999';
		 	}
		});
  }
}
