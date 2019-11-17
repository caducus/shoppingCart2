var Product = require("../models/product.js");

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shoppingCart2");

var products = [
  new Product({
    imagePath: "/images/cat-tower.jpeg",
    title: "Cat Tower",
    description: "An amazing, amusement-park theme cat tower where your little daredevils can play.",
    price: 199
  }),
  new Product({
    imagePath: "/images/catnip-filled-mouse.jpg",
    title: "Catnip-filled Mouse",
    description: "A timeless classic, made of faux-mouse fur and catnip.",
    price: 5
  }),
  new Product({
    imagePath: "/images/feather-on-stick.jpg",
    title: "Feather on a Stick",
    description: "A selection of several colorful feathers on plastic sticks; faniciful, bouncy, and fun!",
    price: 20
  }),
  new Product({
    imagePath: "/images/self-pet-station.jpeg",
    title: "Self-pet Station",
    description: "A station which allows your cat to pet his or herself, especially useful when you're at work all day long!",
    price: 30
  })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
  products[i].save(function(error, results) {
    done++;
    if (done === products.length) {
      exit();
    };
  });
};

function exit() {
  mongoose.disconnect();
};
