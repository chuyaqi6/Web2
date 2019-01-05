function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(
		function(){
			var isStop = true;
			for (var attr in json){
				if(attr == 'opacity'){
					var now = parseInt(getStyle(obj,attr)*100);
				}else{
					var now = parseInt(getStyle(obj,attr));
				}
				var speed = (json[attr]-now)/30;
				speed = speed >0 ? Math.ceil(speed):Math.floor(speed);
				if(attr == 'opacity'){
					obj.style[attr] = (now+speed)/100;
				}else{
					obj.style[attr] = now+speed+'px';
				}
				var current = now + speed;
				if(json[attr]!=current){
					isStop = false;
				}
			}
			if(isStop){
				clearInterval(obj.timer);
				callback&&callback();
			}
		},10);
    }
	//获取某个属性的属性值（兼容IE浏览器和非IE浏览器）
function getStyle(obj,style){
	if(getComputedStyle(obj)){
		return getComputedStyle(obj)[style];
	}else{
		obj.currentStyle[style];
	}
}
/*顶部悬浮*/
window.onload=function () {
	var topFloat=document.getElementById("top-box");
	window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.body.scrollTop;
		if (st>0) {
			topFloat.style.position='fixed';
		} else {
			topFloat.style.position='static';
		}
	}
}
/*中间部分图片轮播*/
var slider = document.getElementById('slider');
var index = 1;
	//默认滑动方式
function next(){
	index++;
	animate(slider,{left:-809*index},function(){
		if(index==7){
			slider.style.left = '-809px';
			index = 1;
		}
	})
	navChange();
}
function prev(){
	index--;
	animate(slider,{left:-809*index},function(){
		if(index == 0){
			slider.style.left = '-4854x';
			index = 6;
		}
	})
	navChange();
}
var timer = setInterval(next,2000)

//鼠标滑上时停止轮播，左右箭头淡入
var box = document.getElementById('box');
var left = document.getElementById('left');
var right = document.getElementById('right');
box.onmouseover = function(){
	clearInterval(timer);
	animate(left,{opacity:70});
	animate(right,{opacity:70});
}

//鼠标滑出时继续轮播，左右箭头淡出
box.onmouseout = function(){
	timer = setInterval(next,2000);
	animate(left,{opacity:0});
	animate(right,{opacity:0});
}

//点击左右箭头
right.onclick = next;
left.onclick = prev;

//点击小按钮，对应图片在框中显示
var oNavlist = document.getElementById('nav').children;
for (var i = 0; i < oNavlist.length; i++) {
	oNavlist[i].idx = i; 
	oNavlist[i].onclick = function(){
		index = this.idx + 1;
		animate(slider,{left:-809*index});
		navChange();
	}
}

//小圆点样式
function navChange(){
	for (var i = 0; i < oNavlist.length; i++) {
		oNavlist[i].className = '';
	}
	if(index==7){
		oNavlist[0].className = 'active';
	}else if(index==0){
		oNavlist[5].className = 'active';
	}else{
		oNavlist[index-1].className = 'active';
	}
}

/*手机充值*/
var sel = document.getElementById("sel");
var p = document.getElementById("middle-3-3-p3");
sel.onclick=function(){
	p.innerHTML="";
	p.innerHTML="¥"+this.value;
}

/*公告轮播*/
var slider2=document.getElementById("middle-3-2-slider");
var box1 = document.getElementById("middle-3-2");
var news_indext=1;
function news_next() {
	news_indext++;
	animate(slider2,{top:-41*news_indext},function(){
		if (news_indext==13) {
			slider2.style.top='-41px';
			news_indext=1;
		}
	});
}
var news_time=setInterval(news_next,500);
box1.onmouseover=function(){
	clearInterval(news_time);
}
box1.onmouseout=function(){
	news_time=setInterval(news_next,500);
}
/*侧边栏效果*/
var sidebar1 = document.getElementById('sidebar1');
var sidebar2 = document.getElementById('sidebar2');
var sidebar3 = document.getElementById('sidebar3');
var sidebar4 = document.getElementById('sidebar4');
sidebar1.onmouseover = function(){
	animate(sidebar1,{width:120});
}
sidebar2.onmouseover = function(){
	animate(sidebar2,{width:120});
}
sidebar3.onmouseover = function(){
	animate(sidebar3,{width:120});
	sidebar3_img1.style.display='none';
	sidebar3_img2.style.display='block';
}
sidebar4.onmouseover = function(){
	animate(sidebar4,{width:120});
}
sidebar1.onmouseout = function(){
	animate(sidebar1,{width:45})
}
sidebar2.onmouseout = function(){
	animate(sidebar2,{width:45})
}
sidebar3.onmouseout = function(){
	animate(sidebar3,{width:45})
	sidebar3_img1.style.display='block';
	sidebar3_img2.style.display='none';
}
sidebar4.onmouseout = function(){
	animate(sidebar4,{width:45})
}