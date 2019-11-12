document.getElementById('but1').addEventListener('click', function() {
  getSubtotal();
});
document.getElementById('but2').addEventListener('click', function() {
  getSubtotal();
});
document.getElementById('but3').addEventListener('click', function() {
  getSubtotal();
});
var menuItems = [
  "bluenana",
  "grapple",
  "orangeagranate"
];
var menuPrices = [
  12.25,
  5.99,
  7.25
];

for (i = 0; i < menuItems.length; i++ ) {
  document.getElementsByClassName('itemName')[i].textContent = menuItems[i];
  document.getElementsByClassName('price')[i].textContent = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(menuPrices[i]);
}

function getSubtotal() {
  var vals = document.getElementsByClassName('inpt');/*
  var it1cont = document.getElementById("it1").value;
  var it2cont = document.getElementById("it2").value;
  var it3cont = document.getElementById("it3").value;
  var subtotal = (it1cont * menuPrices[0]) + (it2cont * menuPrices[1]) + (it3cont * menuPrices[2]);*/
  var subtotal = 0;
  for (i = 0; i < vals.length; i ++) {
    subtotal += vals[i].value * menuPrices[i];
  }
  document.getElementById('subTot').innerHTML = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(subtotal);
  document.getElementById('finalize').addEventListener('click', function() {
    var salesTax = subtotal * 0.06;
    var total = subtotal + salesTax;
    document.getElementById('tax').innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(salesTax);
    document.getElementById('saleTax').style.display = "table-row";
    document.getElementById('tot').innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(total);
    document.getElementById('total').style.display = "table-row";
  });
};
