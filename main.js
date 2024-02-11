var menu = document.getElementById("sidbar");
var clickMenu = document.getElementById("clickMenu");

clickMenu.onclick = function () {
  if (window.innerWidth < 766) {
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
};

// ===========
var menu = document.getElementById("sidbar");
var clickMenu = document.getElementById("clickMenu");

clickMenu.onclick = function () {
  if (window.innerWidth < 766) {
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
};




var quantityInput = document.querySelectorAll(".quantity input");
var plusButton = document.querySelectorAll(".quantity .plus");
var minusButton = document.querySelectorAll(".quantity .minus");
var total = document.querySelectorAll("#total");
var quantity = document.querySelectorAll("#quantity");
var price = document.querySelectorAll("#price");

for (let i = 0; i < total.length; i++) {
  plusButton[i].onclick = function () {
    var currentValue = parseInt(quantityInput[i].value);
   var quantity=  quantityInput[i].value = currentValue + 1;
    total[i].innerHTML =quantity * price[i].value;
  };

  minusButton[i].onclick = function () {
    var currentValue = parseInt(quantityInput[i].value);
    if (currentValue > 1) {
      quantityInput[i].value = currentValue - 1;
      total[i].innerHTML = quantityInput[i].value * price[i].value;
    }
  };
}


// Create a new crolTop element
var crolTop = document.createElement("p");

// Set some text content for the crolTop
crolTop.innerHTML = `<a href="#"><i class="fa-solid fa-angles-up"></i></a>`;
crolTop.className="crolTop"
// Append the crolTop to an existing element with id "container"
document.querySelector("body").appendChild(crolTop);

console.log(crolTop);

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY ;
  if (scrollPosition > 300) { // يمكنك تغيير هذا الرقم حسب متطلباتك
      crolTop.style.display = 'block'; // عرض العنصر
  } else {
      crolTop.style.display = 'none'; // إخفاء العنصر
  }
});
