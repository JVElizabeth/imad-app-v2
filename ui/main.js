console.log('Loaded!');

var img=document.getElementById("madi");
var marginLeft=0;
function moveRight(){
    marginLeft=merginLeft+10;
    img.style.marginLeft+'px';
}
img.onclick=function(){
img.interval=setInterval(moveRight,100);
};