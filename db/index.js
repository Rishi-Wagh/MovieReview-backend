const mongoose = require('mongoose');

mongoose
    .connect("mongodb+srv://rushikesh10:lCl3Jw3NyuR760qr@fivestarmovie.lnxvlld.mongodb.net/fiveStarMovies?retryWrites=true&w=majority")
    .then(() => {
        console.log('db is connected!')
    })
    .catch((ex) => {
        console.log('db connection failed: ', ex)
    })