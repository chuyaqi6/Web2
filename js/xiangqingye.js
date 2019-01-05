/*净含量的选择*/
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var p9 = document.getElementById('p9');
window.onload = function(){
	btn1.style.background = "url(../img/duigou.png) no-repeat 46px 15px";
	btn1.style.border = "solid 1px rgb(255,8,83)";
	p9.innerHTML = '"150ml"';	
}
btn1.onfocus = function(){
	btn1.style.background = "url(../img/duigou.png) no-repeat 46px 15px";
	btn1.style.border = "solid 1px rgb(255,8,83)";
	btn2.style.background = "";
	btn2.style.border = "";
	p9.innerHTML = '"150ml"';
}
btn2.onfocus = function(){
	btn1.style.background = "";
	btn1.style.border = "";
	btn2.style.background = "url(../img/duigou.png) no-repeat 46px 15px";
	btn2.style.border = "solid 1px rgb(255,8,83)";
	p9.innerHTML = '"200ml"';
}
/*数量的设置*/
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var input = document.getElementById('input');
btn3.onclick = function(){
	var value = input.value-0;
	if(value==2){
		btn3.style.cursor='not-allowed';
	}
	if(value!=1){
		input.value=value-1;
	}
}
btn3.onmouseover=function(){
	if(input.value==1){
		btn3.style.cursor='not-allowed';
	}else{
		btn3.style.cursor='pointer';
	}
}
btn4.onclick = function(){
	var value = input.value-0;
	if(value==4){
		btn4.style.cursor='not-allowed';
	}
	if(value!=5){
		input.value=value+1;
	}
}
btn4.onmouseover=function(){
	if(input.value==5){
		btn4.style.cursor='not-allowed';
	}else{
		btn4.style.cursor='pointer';
	}
}
input.onchange=function(){
	if (input.value<1) {
		input.value='1';
	}else if(input.value>5){
		input.value='5';
	}
}

/*购物车*/
var btn6 = document.getElementById('btn6');
var Shopping = document.getElementById('Shopping');
var Shopping_button = document.getElementById('Shopping_button');
var btn56 = document.getElementById('btn56');
btn6.onclick = function(){
	Shopping.style.display = 'block';
}
Shopping_button.onclick = function(){
	Shopping.style.display = 'none';
}
btn56.onclick = function(){
	Shopping.style.display = 'none';
}

/*图片的选择*/
var img1 = document.getElementById('img1');
var img_2 = document.getElementById('img-2');
var img_3 = document.getElementById('img-3');
window.onload = function(){
	img_2.style.border = 'solid 2px rgb(255,144,3)';
	img1.src = '../img/pp0.jpeg'; 
	Bimg.src = '../img/pp0.jpeg';
}
img_2.onmouseover = function(){
	img_3.style.border = '';
	img_2.style.border = 'solid 2px rgb(255,144,3)';
	img1.src = '../img/pp0.jpeg';
	Bimg.src = '../img/pp0.jpeg';
}
img_3.onmouseover = function(){
	img_2.style.border = '';
	img_3.style.border = 'solid 2px rgb(255,144,3)';
	img1.src = '../img/pp1.jpeg';
	Bimg.src = '../img/pp1.jpeg';
	Bimg.style.width = '800px';
	Bimg.style.heigth = '800px';
}

/*放大镜*/
var bigimg = document.getElementById('img2');
var slider = document.getElementById('slider');
var Bimg = document.getElementById('Bimg');
var goods1 = document.getElementById('goods1');
goods1.onmouseover = function(){
	slider.style.display = 'block';
	bigimg.style.display = 'block';
}
goods1.onmouseout = function(){
	slider.style.display = 'none';
	bigimg.style.display = 'none';
}
goods1.onmousemove = function(e){
	var oL = e.clientX - goods1.offsetLeft - slider.offsetWidth/2;
 	var oT = e.clientY - goods1.offsetTop - slider.offsetHeight/2;
 		//left最大值
 	var oMaxl = goods1.offsetWidth - slider.offsetWidth;
 		//top最小值
 	var oMaxt = goods1.offsetHeight - slider.offsetHeight;
 	oL = oL > oMaxl ? oMaxl : oL < 0 ? 0 : oL;
 	oT = oT > oMaxt ? oMaxt : oT < 0 ? 0 : oT;
 	slider.style.left = oL+'px';
 	slider.style.top = oT+'px';
 	var pL = -oL * 2;
 	var pT = -oT * 2;
 	Bimg.style.left = pL+'px';
 	Bimg.style.top = pT+'px';
}