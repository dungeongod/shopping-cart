var Product = require('../models/product');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/shopping');
var products = [
    new Product({
        imagePath: 'https://static.giantbomb.com/uploads/original/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://static.giantbomb.com/uploads/original/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
        title: 'CSGO',
        description: 'Awesome Game!!!!',
        price: 50
    }),
    new Product({
        imagePath: 'https://static.giantbomb.com/uploads/original/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
        title: 'Pubg',
        description: 'Awesome Game!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://static.giantbomb.com/uploads/original/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
        title: 'Fortnite',
        description: 'Awesome Game!!!!',
       ///// price: 20
    }),new Product({
        imagePath: 'https://static.giantbomb.com/uploads/original/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
        title: 'Six Siege',
        description: 'Awesome Game!!!!',
        price: 15
    })
];
var done = 0;
for(var i=0; i<products.length;i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
