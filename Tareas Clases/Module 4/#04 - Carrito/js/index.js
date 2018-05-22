var jsonCart = {};
var savedCart = JSON.parse(localStorage.getItem("jsonCart"));
var newProduct;

// Check if cart already exists in LocalStorage
var cart = savedCart ? savedCart.products : [];
var cant = savedCart ? savedCart.inCart : 0;
$('#cant').html(cant);

// Stock de los productos
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

// Function add item to LocalStorage Cart
  function newItemInfo(prod, quant, cant) {
    let newProduct = {
      product: prod,
      quantity: parseInt(quant)
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

  // Set item in LocalStorage cart
  function setItemInfo(index, name, quant) {
    cart[index].product.name = name;
    cart[index].quantity += parseInt(quant);
    jsonCart = {
      "products": cart,
      "total": cart.length,
      "inCart": cant
    };
    localStorage.setItem("jsonCart", JSON.stringify(jsonCart));
  }

  // Validate Stock
  function checkStock(index, quant) {
    if (productStock[index].stock >= quant) {
      return true
    }
  };

  var cant = 0;
// Fución agregar item
$('.add').on('click', function() {
  let father = $(this).parent();
  let name = father.find('.descripcion').text();
  let quant = father.find('input').val();
  // let existentes = cart.filter(cart => (cart.product.name === name));
  // if (existentes.length > 0) {
  //
  //   console.log('El producto existe en el carro!')
  // };
  $.map( cart, function( a, index ) {
    if (a.product.name === name) {
      setItemInfo(index, name, quant);
    }
  });
  $.each(productStock, function (index, item) {
    if (productStock[index].name === name) {
      product = productStock[index];
      if (checkStock(index, quant)) {
        cant = cant + parseInt(quant);
        $('#cant').text(cant);
        newItemInfo(product, quant, cant);
      } else {
        console.log("No hay suficiente stock")
      }
    }
  });
  father.find('input').val("");
});
