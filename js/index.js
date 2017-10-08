/**
 * Created by Administrator on 2017/8/11.
 */
//固定栏
    $(function () {
        $('.fixed a').eq(0).click(function () {
//               这是固定写法，当做代码素材使用，JQ特殊封装，也考虑了浏览器兼容问题
            $('html,body').stop().animate({ scrollTop: 100 });
        });
    })
//轮播图
var banner=$id('banner');
var ul=banner.children[0];
var list=ul.children;
var btn=$id('btn');
var btns=btn.children;
var btn_left=$id('btn_left');
var btn_right=$id('btn_right');
var currentIndex=0;
var imgWidth=list[0].offsetWidth;
//鼠标移入圆点切换图片
for(var i = 0; i < btns.length; i++) {
     btns[i].index=i;
    btns[i].onclick=clickHandle;
}
function clickHandle() {
    var target=this.index*imgWidth*-1;
    animate(ul,target);
    for(var j=0;j<btns.length;j++){
        btns[j].removeAttribute('class');
    }
    this.className='current';
    //把俩个索引同步
    correntIndex=this.index;
}
//左右按钮点击切换
btn_left.onclick=function(){
    if(currentIndex==0){
        currentIndex=ul.children.length-1;
        ul.style.left=currentIndex*imgWidth*-1+'px';
    }
    currentIndex--;
    var target=currentIndex*imgWidth*-1;
    animate(ul,target);
    for(var j = 0; j < btns.length; j++) {
         btns[j].removeAttribute('class');
    }
    btns[currentIndex].className='current';
}
btn_right.onclick=autoRun;
function autoRun() {
    if(currentIndex==ul.children.length-1){
        currentIndex=0;
        ul.style.left=0;
    }
    currentIndex++;
    var target=currentIndex*imgWidth*-1;
    animate(ul,target);
    for(var j = 0; j < btns.length; j++) {
         btns[j].removeAttribute('class')
    }
    if(currentIndex==ul.children.length-1){
        btns[0].className='current'
    }else{
        btns[currentIndex].className='current';
    }
}
//自动轮播
var timer =setInterval(autoRun,2000);
//鼠标移入移出控制自动轮播
banner.onmouseover=function () {
    clearInterval(timer);
}
banner.onmouseout=function () {
    timer=setInterval(autoRun,2000);
}

//职业选择
var bd=$id('bd');
var hd=$id('hd');
var lis1=hd.children[0].children;
var lis2=bd.children[0].children;
var job_cont=document.getElementById("job_cont");
for(var i = 0; i < lis1.length; i++){
    lis1[i].index=i;
    lis1[i].onclick=function () {
        for(var j = 0; j < lis1.length; j++){
            lis2[j].style.display='none';
            lis1[j].style.color='#fff';
            lis1[j].style.background='url(img/tab_a1.png) no-repeat';
        }
        lis2[this.index].style.display='block';
        lis1[this.index].style.color='#e58858';
        lis1[this.index].style.background='url(img/tab_h1.png) no-repeat';
    }
}
//我要变强
var main3_nav=$id('main3_nav');
var as=main3_nav.children;
var tab_conts=document.getElementsByClassName('tab_cont');
for(var i = 0; i<as.length-1; i++) {
    as[i].index=i;
    as[i].onmouseover=function () {
        for(var j = 0; j < as.length-1; j++) {
             tab_conts[j].style.display='none';
            as[j].style.background="url(img/tab_a.png) no-repeat";
            as[j].style.color='#fff';
        }
        tab_conts[this.index].style.display='block';
        as[this.index].style.background="url(img/tab_h.png) no-repeat";
        as[this.index].style.color='#e58858';
    }
}
//我要变美
var nav_wybm=$id('nav_wybm');
var ass=nav_wybm.children;
var main4_conts=document.getElementsByClassName('main4_cont');
console.log(main4_conts);
for(var i = 0; i<ass.length; i++) {
    ass[i].index=i;
    ass[i].onmouseover=function () {
        for(var j = 0; j < ass.length; j++) {
            main4_conts[j].style.display='none';
            ass[j].style.background="url(img/tab_a.png) no-repeat";
            ass[j].style.color='#fff';
        }
        main4_conts[this.index].style.display='block';
        ass[this.index].style.background="url(img/tab_h.png) no-repeat";
        ass[this.index].style.color='#e58858';
    }
}
//获取金钱
var nav_bottom=$id('nav_bottom');
var asss=nav_bottom.children;
var main5_conts=document.getElementsByClassName('main5_cont');
for(var i = 0; i<asss.length; i++) {
    asss[i].index=i;
    asss[i].onmouseover=function () {
        for(var j = 0; j < asss.length; j++) {
            main5_conts[j].style.display='none';
            asss[j].style.background="url(img/tab_a1.png) no-repeat";
            asss[j].style.color='#fff';
        }
        main5_conts[this.index].style.display='block';
        asss[this.index].style.background="url(img/tab_h1.png) no-repeat";
        asss[this.index].style.color='#e58858';
    }
}




