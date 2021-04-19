// Lisää tapahtumakuuntelijat
document.querySelector(".inputField button").addEventListener("click", newLine);
document.querySelector(".footer button").addEventListener("click", clear);

// Luo sulkemisnapin ja lisää sen listan kohteisiin
var todoList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < todoList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "deleteButton";
  span.appendChild(txt);
  todoList[i].appendChild(span);
}

// Poista kohde listasta
var del = document.getElementsByClassName("deleteButton");
var i;
for (i = 0; i < del.length; i++) {
    del[i].onclick = function() {
        var div = this.parentNode;
        div.parentNode.removeChild(div);
    }
}

// Lisää valintamerkki klikattaessa listan kohdetta
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
        }
    }, false);

// Lisää uusi kohde listaan
function newLine() {
    var li = document.createElement("li");
    var inputValue = document.querySelector(".inputField input").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (!/\S/.test(inputValue)) {
        alert("Et voi lisätä tyhjää kenttää");
    } else {
        document.querySelector(".todoList").appendChild(li);
    }
    document.querySelector(".inputField input").value = "";
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    span.className = "deleteButton";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < del.length; i++) {
        del[i].onclick = function() {
          var div = this.parentNode;
          div.parentNode.removeChild(div);
        }
    }
}

// Tyhjennä koko lista
function clear() {
    var nodes = document.querySelector("ul");
    while (nodes.firstChild) {
        nodes.removeChild(nodes.firstChild);
  }
}
