//DOM: es un árbol que contiene todas las cosas que se van a dibujar en la pantalle. Al inspeccionar, coincide con el html.
var user =  {
  name: "San (Mononoke)",
  bio: "Princess of the Wolf Gods",
  profile_pic: "mononoke_profile.jpg"
};

var ashitaka = {
  name: "Ashitaka",
  bio: "Warrior",
  profile_pic: "ashitaka_profile.png"
};

var moro = {
  name: "Moro",
  bio: "Wolf",
  profile_pic: "moro_profile.jpeg"
};

var forest =   {
  name: "Forest Spirit",
  bio: "Forest Spirit",
  profile_pic: "forestSpirit_profile.jpg"
};

var kodama = {
  name: "Kodama",
  bio: "Spirit",
  profile_pic: "kodama_profile.png"
};
//
var friends = [ashitaka, moro, forest, kodama];

//Declaro la función que carga el perfil del user.
function renderProfile(userData) {
  var profile = document.getElementById('profile'); //Trae (del html) el nodo del árbol que tiene ese ID

  var profilePic = document.createElement('img'); //Crea un nodo de tipo img.
  profilePic.src = "img/" + userData.profile_pic; //Set source a la imagen.
  profile.appendChild(profilePic); //Agrega el tag al contenedor.

  var name = document.createElement('h1'); //Crea un nodo de tipo h1.
  name.textContent = userData.name; //Agrega contenido deseado al tag h1
  profile.appendChild(name); //Incorpora el tag al contenedor

  var bio = document.createElement('h4'); //Crea un nodo de tipo h4.
  bio.textContent = userData.bio;
  profile.appendChild(bio);
}

//Declaro la función que carga los amigos.
function renderFriends(friendsData) {
  var friends = document.getElementById('friends'); //Trae (del html) el nodo del árbol que tiene ese ID

  var title = document.createElement('p');
  title.textContent = "Friends";
  friends.appendChild(title);

  for (var i = 0; i < friendsData.length; i++) {
    var friendPic = document.createElement('img');
    friendPic.src = "img/" + friendsData[i].profile_pic;
    friends.appendChild(friendPic);
  }

  var seeMore = document.createElement('a');
  seeMore.href = "#"
  seeMore.textContent = "See more...";
  friends.appendChild(seeMore);
}

function replytoMyComment() {
  var randomAuthor = friends[Math.floor(Math.random() * friends.length)];
  var randomText = ["Lo mismo digo!", "Hola!", "No lo hubiera dicho mejor...", "Tomamos una birra?", "Acá estoy!"][Math.floor(Math.random() * 5)]
  addComment({author: randomAuthor, date: new Date().toLocaleString().split(', ')[1], text: randomText})
}

//Declaro la caja de posts.
function renderComposer() {
  var composer = document.getElementById('composer');

  var textArea = document.createElement('textarea');
  textArea.rows = 3;
  textArea.placeholder = "What's up?"
  composer.appendChild(textArea);

  //Función (variable local) que utiliza como parámetro la variable textArea
  function addMyComment() {
    if (!textArea.value) {
      return; //Me garantiza no postear nada si la caja de textArea está vacía
    }
    addComment({author: user, text: textArea.value, date: new Date().toLocaleString().split(', ')[1]});
    setTimeout(replytoMyComment, 1000) //Configura un intervalo de tiempo hasta que llama a la función replytoMyComment.
    textArea.value = "" //Una vez publicado el post, borra el contenido de la caja textArea.
  }

  var button = document.createElement('button');
  button.textContent = "POST";
  button.onclick = addMyComment; //Evento que llama al presionar el botón: función addMyComment.
  composer.appendChild(button);
}

// Declaro una función que recibe como argumento un objeto que tiene tres campos: author, fecha y commentario.
// La función agrega el comentario a la lista.
function addComment(commentData) {
  var commentList = document.getElementById('commentList');
  var li = document.createElement('li');
  commentList.appendChild(li);
  var image = document.createElement('img');
  image.src = "img/" + commentData.author.profile_pic;
  li.appendChild(image);

  var box = document.createElement('div');
  box.classList.add("box");
  li.appendChild(box);

  var name = document.createElement('span');
  name.classList.add("name");
  name.textContent = commentData.author.name;
  box.appendChild(name);

  var date = document.createElement('span');
  date.classList.add("date");
  date.textContent = commentData.date;
  box.appendChild(date);


  var text = document.createElement('p');
  text.classList.add("text");
  text.textContent = commentData.text;
  box.appendChild(text);
}

renderProfile(user);
renderFriends(friends);
renderComposer();

function addFirstComment() {
  addComment({
    author: ashitaka,
    text: 'Lo que pretendo es que los humanos y el bosque puedan vivir en paz',
    date: '5:40 AM'});
}

function addSecondComment() {
  addComment({
    author: moro,
    text: 'Okoto es demasiado testarudo. ¡No escuchará! Puede que incluso ya se haya enterado de que es una trampa. ' +
      'Los jabalíes son una raza orgullosa. ¡Hasta el último de ellos seguirá atacando con furia!',
    date: '5:40 AM'});
}

addComment({author: forest,
  text: 'Vengo para ver con claridad, sin odio',
  date: '11:30 PM'});
addComment({author: ashitaka,
  text: 'Vengo para ver con claridad, sin odio',
  date: '11:30 PM'});
addComment({author: moro,
  text: '¿Te atreves a desafiar al clan de los lobos?',
  date: '5:40 AM'});

setTimeout(addFirstComment , 2000);
setTimeout(addSecondComment , 4000);
