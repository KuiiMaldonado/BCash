const router = require('express').Router();

const list = require('../models/List');
const Payment = require('../models/Payment');
const User = require('../models/User');
const UserList = require('../models/UserList');

router.get('/',  (req,res) => {
    res.render('main')
});

router.get('/balance',  (req,res) => {
    res.render('balance')
});

router.get('/listBreakdown',  (req,res) => {
    res.render('listBreakdown')
});

router.get('/lists',  (req,res) => {
    res.render('lists')
});

router.get('/login',  (req,res) => {
    res.render('login')
});


router.get('/user',  (req,res) => {
    res.render('user')
});

router.get('/userInfo',  (req,res) => {
    res.render('userInfo')
});

router.get('/test',  (req,res) => {
    res.send('test')
});

module.exports = router;