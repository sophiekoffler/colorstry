var toggle=false;

function largeImage(src){
  console.log("src" + src);
  var div = document.getElementById("largeImage");
  div.style.position="fixed";
  div.style.display="grid";
  div.style.alignItems="flex-start"
if(toggle==false){
  console.log("in not toggle");
  var child = document.createElement("img");
  child.setAttribute("src",src);
  child.style.position="fixed";
  child.style.objectFit = "contain";
  child.style.margin="0 auto";
  child.addEventListener("click", function() {togYN()});
  div.appendChild(child);
  toggle=true;
  console.log("finished");
}
}

function togYN(){
  if(toggle){
    console.log("in toggle");
    var div = document.getElementById("largeImage");
    console.log(div);
    div.style.display= "none";
    div.removeChild(div.firstChild);
    toggle=false;
  }
}

window.onload = function(){
var pieces = document.getElementsByTagName('img');
var main = document.getElementById("mainC");
console.log("main");
for (p in pieces){
  let src = pieces[p].getAttribute("src");
  pieces[p].addEventListener("click", function() {largeImage(src);});
  }

}
window.addEventListener("keydown",function(event){
  if(event.defaultPrevented)
    return;
  console.log("event "+ event.key);
  if(event.key=="Escape"){
    togYN();
  }
});
