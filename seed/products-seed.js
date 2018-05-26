var Product = require('../models/product');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/shopping');
var products = [
    new Product({
        imagePath: 'https://static.giantbomb.com/uploads/original/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
        title: 'Gothic Video Game',
        description: 'Gothic is a single-player action role-playing video game for Microsoft Windows developed by the German company Piranha Bytes.!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://www.kichukkhon.com/content/images/thumbs/0000881_counter-strike-global-offensive_450.jpeg',
        title: 'CSGO',
        description: 'Counter-Strike: Global Offensive is a multiplayer first-person shooter video game developed by Hidden Path Entertainment and Valve Corporation.!!!',
        price: 50
    }),
    new Product({
        imagePath: 'https://http2.mlstatic.com/playerunknowns-battlegrounds-pubg-pc-steam-vpn-D_NQ_NP_827084-MLA26164807164_102017-F.jpg',
        title: 'Pubg',
        description: 'Awesome GamPlayerUnknowns Battlegrounds is a multiplayer online battle royale game developed and published by PUBG Corporation!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81yhp0kRu%2BL._SL1500_.jpg',
        title: 'Fortnite',
        description: 'ortnite is a co-op sandbox survival game developed by Epic Games and People Can Fly and published by Epic Games. !!!!',
       price: 20
    }),new Product({
        imagePath: 'http://www.mobygames.com/images/covers/l/317349-tom-clancy-s-rainbow-six-siege-art-of-siege-edition-windows-other.jpg',
        title: 'Six Siege',
        description: 'Tom Clancy Rainbow Six Siege is a tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft!!!!',
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
