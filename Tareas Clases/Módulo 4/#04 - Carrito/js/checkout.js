var savedCart = JSON.parse(localStorage.getItem("jsonCart"));
var cart = savedCart ? savedCart.products : [];
var subtotal = 0;

var cant = savedCart ? savedCart.inCart : 0;
$('#cant').html(cant);

// Change visible/invisible
function activeToggle(item) {
  item.toggleClass('hide');
}

// Subtotal Calculator
function subTotal() {
  subtotal = 0
  $.each( cart, function(index, item) {
    subtotal += cart[index].quantity * cart[index].product.price
  });
  let subTot = `<p>${subtotal}</p>`
  $('#aside').html(subTot);
};


function init(){
  if (cart.length == 0) {
    let message = `<div id='message'>
    <h1>Tu carro está vacío</h1>
    <p>Es la oportunidad perfecta para comprar!</p>
    <button id='shopNow'>SHOP NOW!</button>
    </div>`;
    $('.container').append(message);
  } else {
    loadCart();
  };
}

function loadCart() {
  activeToggle($('#aside'));
  activeToggle($('#cartGrid'))
  $('#cartGrid').addClass('no-hide-flex');
  // $('#cartGrid').toggleClass('no-hide');
  $('#cant').text(savedCart.inCart);
  $.each(cart, function(index, item) {
    let newItem = `<div class="cartGrid"><img class="littleImg" src=${item.product.img}>
                  <p class="name">${item.product.name}</p>
                  <p class="price">$ ${item.product.price}</p>
                  <input class="quant" type="number" name="cantidad" value="${item.quantity}">
                  <i class="borrar fas fa-trash-alt" data-id="${item.product.name}"></i></div>`
    $('#cartGrid').append(newItem)
  });
  subTotal();
  let vaciar = `<button id='trash'>VACIAR</button>`
  $('#aside').append(vaciar);
};

$('.container').on('click', '#shopNow', function() {
  window.location.href='index.html';
})

$('.container').on('click', '.borrar', function() {
  $(this).siblings().remove();
  $(this).remove();
  let nameId = $(this).data('id');
  $.each(cart, function(index, item) {
    console.log(cart, item.product)
    if (nameId === item.product.name ) {
      cart.splice(index, 1)
      subTotal();
    }
  });
})

$('#aside').on('click', '#trash', function(){
  $('#cartGrid').toggleClass('hide');
  $('#cartGrid').toggleClass('no-hide-flex');
  activeToggle($('#aside'));
  cart = [];
  jsonCart = {
    "products": cart,
    "total": cart.length,
    "inCart": 0
  };
  localStorage.setItem("jsonCart", JSON.stringify(jsonCart));
  init();
})

init();
