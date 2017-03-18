console.log('Loaded!');

var img=document.getElementById("madi");
function moveRight(){
    marginLeft=merginLeft+10;
    img.style.marginLeft+'px';
}
img.onclick=function(){
img.interval=setinterval(moveRight,100);
};