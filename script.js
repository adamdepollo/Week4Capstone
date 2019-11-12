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

for (i = 0; i < menuItems.length; i++) {
  document.getElementsByClassName('itemName')[i].textContent = menuItems[i];
  document.getElementsByClassName('price')[i].textContent = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(menuPrices[i]);
};

var buts = document.getElementsByClassName('addItem');
for (i = 0; i < buts.length; i++) {
  buts[i].addEventListener('click', function() {
    getSubtotal();
  });
};

function getSubtotal() {
  var vals = document.getElementsByClassName('inpt');
  var subtotal = 0;
  for (i = 0; i < vals.length; i++) {
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
