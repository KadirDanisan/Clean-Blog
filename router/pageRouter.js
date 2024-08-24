const router = require('express').Router(); //Router işlemleri express'de
const pageController = require('../controller/pageController');
const postController = require('../controller/postController');


router.get('/', pageController.home);
router.get('/about', pageController.about);
router.get('/add_post', pageController.addPost);
router.get('/post', pageController.post);
router.post('/new-post', postController.newPost);
router.get('/posts/:id', postController.postId);


module.exports = router;
