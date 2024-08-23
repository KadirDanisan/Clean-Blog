const express = require('express'); //import edilmesi...
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const Post = require('./models/post');

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
app.get('/', async (req, res) => {
    const posts = (await Post.find({})).reverse();
    res.render('site/index', {posts});
});


// about includes
app.get('/about', (req, res) => {
    res.render('site/about');
});

// add_post includes
app.get('/add_post', (req, res) => {
    res.render('site/add_post');
});

// post includes
app.get('/post', (req, res) => {
    res.render('site/post');
});

//add_post yazdıgımız postları anasayfamıza yönlendir diyoruz.
app.post('/new-post', (req, res) => {
    Post.create(req.body);
    res.redirect('/');
});

app.get('/posts/:id', async (req,res)=> {
    const id = req.params.id;
    const posts = await Post.find({_id: id});
    res.render('site/post.ejs', {posts});
});

app.listen( process.env.PORT || 3000, ()=> {
    console.log("Server başarıyla kurulmuştur");
});


