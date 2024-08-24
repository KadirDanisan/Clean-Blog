const express = require('express'); //import edilmesi...
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const Post = require('./models/post');
const pageRouter = require('./router/pageRouter');
mongoose.connect('mongodb://127.0.0.1/cleanblog-test-db');


// middleware oluşturduk ve public dosyasını çagırdık...
app.use(express.static('public'));

// formdan gelen url parçalıyor.
app.use(express.urlencoded({ extended: true }))

// parçalanan url json formatına sokuyor.
app.use(express.json())

// ejs projeye dahil etcez
app.set('view engine', 'ejs');

// index includes
app.use('/', pageRouter);
//add_post yazdıgımız postları anasayfamıza yönlendir diyoruz.


app.listen( process.env.PORT || 3000, ()=> {
    console.log("Server başarıyla kurulmuştur");
});


