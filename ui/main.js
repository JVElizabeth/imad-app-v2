console.log('Loaded!');
var button=document.getElementById("counter");
var counter=0;
button.onclick=function(){
  var request=new XMLHttpRequest();
   request.onreadystatechanged=function(){
    if(request.readystate==XMLHttpRequest.DONE){
        if(request.status==200){
             var counter=requset.responseText;
             var span=document.getElementById("count");
             span.innerHTML=counter.toString();
        }
    }

};
   request.open('GET','http://jvelizabeth.imad.hasura-app.io/',true);
   request.send(null);
 
};