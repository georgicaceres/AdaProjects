var placesList = [{
  name: "Buenos Aires",
  cities: ["CABA", "Tigre", "Villa Ballester", "Liniers"]
},
{
  name: "Córdoba",
  cities: ["Córdoba", "Mina Clavero", "Carlos Paz"]
},
{
  name: "Mendoza",
  cities: ["Mendoza", "San Martín", "San Rafael", "Rivadavia"]
},
{
  name: "San Luis",
  cities: ["San Luis", "Villa Mercedes", "Merlo", "La Punta"]
}
];

placesList.forEach(place => place.cities.forEach(city => console.log(city)));
