var flag = false;

function showimg(x){
  console.log(x);

  var secondbg = document.createElement("div");
  secondbg.setAttribute("class", "background");
  secondbg.setAttribute("onclick", "closeimg()");
  var zoomer = document.createElement("div");
  zoomer.setAttribute("class", "zoomer");
  var forsource = document.createElement("img");
  forsource.setAttribute("class", "forsource");
  forsource.setAttribute("src", "img/ajax-loader.gif");
  zoomer.append(forsource);
  var cross = document.createElement("div");
  cross.setAttribute("class", "cross");
  cross.setAttribute("onclick", "closeimg()");
  cross.innerText = "x";

  document.body.prepend(secondbg);
  document.body.prepend(zoomer);
  document.body.prepend(cross);


  var source = x.src;
  document.getElementsByClassName('cross')[0].style.visibility = "visible";
  document.getElementsByClassName('zoomer')[0].style.visibility = "visible";
  document.getElementsByClassName('background')[0].style.visibility = "visible";
  document.getElementsByClassName('forsource')[0].src = source;

}

function closeimg(){
  document.getElementsByClassName('cross')[0].remove();
  document.getElementsByClassName('zoomer')[0].remove();
  document.getElementsByClassName('background')[0].remove();
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

function url(){
  window.location.href="https://paypal.me/emanuelesiena";
}
