$(function () {

  var newDiv = $("<div class='panel'></div");
  var people = $(".people");
  people.after(newDiv);
  $("div.panel").text("fasfdgeegaggwe");

  var add = people.find("[value='dodaj']");

// 1
  function xx () {
    add.on("click", function () {
      var username = people.find("#addUser").val();
      var age = people.find("#age").val();
      var newLi = $("<li></li>");
      newLi.attr("data-age", age).text(username);
      people.find(".main").append(newLi);
      if (age <= 15) {
        newLi.css("background-color", "green");
      } else if (age >=16 && age <= 40) {
        newLi.css("background-color", "blue");
      } else {
        newLi.css("background-color", "brown");
      };
    });
  };

  xx();

// 2
var where = $(".where-i-am");
function addElement (index, method, element) {
  var span = $("<span></span>");
  span.text(index + "jestem tutaj " + method);
  if (method === "append") {
    element.append(span);
  } else if (method === "prepend") {
    element.prepend(span);
  } else if (method === "before") {
    element.before(span);
  } else if (method === "after") {
    element.after(span);
  };
}

addElement(1, "append", where);
addElement(2, "prepend", where);
addElement(3, "before", where);
addElement(4, "after", where);


// 3

var blocks = $(".block");
var left = $("section .left");
var right = $("section .right");
console.log(left);

function moveBlocks () {
  blocks.on("click" , function (event) {
    var block = $(this);
    if (block.parent().attr("class") === "left") {
      block.detach();
      right.append(block);
    } else {
      block.detach();
      left.append(block);
    }


  })
}
moveBlocks();




});
