var flag = false;

function showimg(x){
  console.log(x);
  var source = x.src;
  document.getElementsByClassName('cross')[0].style.visibility = "visible";
  document.getElementsByClassName('zoomer')[0].style.visibility = "visible";
  document.getElementsByClassName('background')[0].style.visibility = "visible";
  document.getElementsByClassName('forsource')[0].src = source;

}

function closeimg(){
  document.getElementsByClassName('cross')[0].style.visibility = "hidden";
  document.getElementsByClassName('zoomer')[0].style.visibility = "hidden";
  document.getElementsByClassName('background')[0].style.visibility = "hidden";
  document.getElementsByClassName('forsource')[0].src = "";
}

function comingsoon(){
  var popup = document.createElement("div");
  popup.setAttribute("class", "popup");
  document.body.prepend(popup);
  var background = document.createElement("div");
  background.setAttribute("class", "background");
  background.setAttribute("id", "firstBG");
  document.body.prepend(background);
  background.style.visibility = "visible";
  var text = document.createElement("p");
  text.innerText = "Coming soon!";
  document.getElementsByClassName('popup')[0].append(text);
  var okbutton = document.createElement("button");
  okbutton.setAttribute("class", "okbutton");
  okbutton.setAttribute("onclick", "okremove(this)")
  okbutton.innerText = "OK";
  document.getElementsByClassName('popup')[0].append(okbutton);
}

function okremove(x){
  x.parentElement.remove();
  document.getElementById('firstBG').remove();
}
