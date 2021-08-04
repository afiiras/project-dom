var total = document.getElementById("total");

var plusBtn = document.getElementsByClassName("plus");
for (let btn of plusBtn) {
  btn.addEventListener("click", function () {
    var itemName = btn.getAttribute("name");

    var price = document.getElementById(itemName + "_price").innerHTML;

    var quantity = document.getElementById(itemName + "_qty");
    quantity.innerHTML++;
    total.innerHTML = +total.innerHTML + +price;
  
  });
}

var minusBtn = document.getElementsByClassName("minus");
for (let btn of minusBtn) {
  btn.addEventListener("click", function () {
    var itemName = btn.getAttribute("name");

    var price = document.getElementById(itemName + "_price").innerHTML;

    var quantity = document.getElementById(itemName + "_qty");

    if (+quantity.innerHTML > 0) {
      quantity.innerHTML--;
      total.innerHTML = +total.innerHTML - +price;
    }
  });
}

var deleteBtn = document.getElementsByClassName("Delete");
for (let btn of deleteBtn) {
  btn.addEventListener("click", function () {
    var itemName = btn.getAttribute("name");

    var price = document.getElementById(itemName + "_price").innerHTML;

    var quantity = document.getElementById(itemName + "_qty");

    total.innerHTML = +total.innerHTML - +quantity.innerHTML * +price;

   document.getElementById(itemName).remove();
    
  });
}

var likeBtn = document.getElementsByClassName("heart");
for (let heart of likeBtn) {
  heart.addEventListener("click", function () {
    var heartColor = heart.getAttribute("fill");
    if (heartColor === "grey") {
      heart.setAttribute("fill", "red");
    } else {
      heart.setAttribute("fill", "grey");
    }
  });
}

