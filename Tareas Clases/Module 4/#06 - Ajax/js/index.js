// $('#btn').on('click', function() {
//   $.ajax({
//     method: "GET",
//     url: "https://jsonplaceholder.typicode.com/posts/1/comments"
//   })
//   .done(function(response) {
//     console.log(response)
//
//     for (i=0; i<response.length; i++) {
//       let div = `<p class="comment">Comentario ${response[i].id}<p>
//                 <p class="name">${response[i].name}</p>
//                 <p class="mail">Email: ${response[i].email}</p>`
//       $('#box').append(div)
//     }
//
//   })
// })

$( document ).ready(function() {
  $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts/1/comments"
  })
  .done(function(response) {
    console.log(response)

    for (i=0; i<response.length; i++) {
      let div = `<p class="comment">Comentario ${response[i].id}<p>
                <p class="name">${response[i].name}</p>
                <p class="mail">Email: ${response[i].email}</p>`
      $('#box').append(div)
    }

  })
});
