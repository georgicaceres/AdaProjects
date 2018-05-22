var jsonCart = {};
var savedCart = JSON.parse(localStorage.getItem("jsonCart"));
var cart = savedCart ? savedCart.products : [];
var indexInCart = -1;

// Product info and stock
var productStock = [{
  name:"Pulsera",
  price: 1500,
  stock: 8,
  img:"products/b.jpg",
},{
  name:"Anillo de diamantes 2",
  price: 8400,
  stock: 10,
  img:"products/g.jpg",
},{
  name:"Collar colores",
  price: 4500,
  stock: 5,
  img:"products/f.jpg",
}, {
  name:"Anillo de diamantes",
  price: 8500,
  stock: 3,
  img:"products/e.jpg",
}];


// Check if item is already in cart
function checkInCart(name) {
  $.map( cart, function( item, index ) {
    if (item.product.name === name) {
      indexInCart = index;
    } else {
      indexInCart = -1
    }
  });
};

// Check Stock
function checkStock(quant, stock) {
  if (quant > stock) {
    return false
  } else {
    return true
  }
}

// Add new item in cart
function addNew(name, quant, stock) {
 if (!checkStock(quant, stock)) {
   console.log('El stock no es suficiente')
 } else {
   let newItem = {
     product: prod,
     quantity: quant
   };
   cart.push(newProduct);
   jsonCart = {
     "products": cart,
     "total": cart.length,
     "inCart": cant
   };
   localStorage.setItem("jsonCart", JSON.stringify(jsonCart));
   console.log("Tu producto fue agregado al carro");
 }
}

// Modify item existin in cart
function changeExisting(index, name, quant) {

}

// Listener on add buttons
$('.add').on('click', function() {
  let name = $(this).siblings('.descripcion').text();
  let quant = parseInt($(this).siblings('input').val());
  let stock = parseInt($(this).siblings('.stock').text());
  checkInCart(name);
  if (indexInCart === -1) {
    addNew(name, quant, stock);
  } else {
    changeExisting(indexInCart, name, quant);
  }
});

// Listener on cart icon
$('#goToCart').on('click', function() {
  location.href = 'cart.html';
});
