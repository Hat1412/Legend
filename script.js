var text = document.getElementById("entry");
var list = document.getElementById("result");
var color = document.getElementById("color");

l = {};

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    t = text.value.toLowerCase();
    l[t] = 0;
    text.value = "";
    for (i in l) {
      list.innerHTML += `<h4 style = "color:${color.value}">${capitalize(
        i
      )}</h4>`;
      list.innerHTML += `</br>`;
    }
    for (var i in l) delete l[i];
  }
});
