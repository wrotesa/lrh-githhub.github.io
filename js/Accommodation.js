//实现滚动文字效果
			var speed = -1;
			var list = document.getElementsByTagName('ul')[0]; 
			var item = document.getElementsByTagName('li');    
			list.innerHTML = list.innerHTML + list.innerHTML;
			list.style.width = item[0].offsetWidth * item.length + 'px'; ）
			function move() {
				if (list.offsetLeft < -list.offsetWidth / 2) {   
					list.style.left = 0 + "px";
				}
				list.style.left = list.offsetLeft + speed + 'px';
			}
			setInterval(move, 10);    
			
			