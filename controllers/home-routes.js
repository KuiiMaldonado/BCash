const router = require('express').Router();

const List = require('../models/List');
const Payment = require('../models/Payment');
const User = require('../models/User');
const UserList = require('../models/UserList');

router.get('/',  (req,res) => {
    res.render('main')
});

router.get('/balance',  (req,res) => {
    res.render('balance')
});

router.get('/listBreakdown', async (req,res) => {
    const paymentData = await Payment.findAll();
    const payments = paymentData.map((user) => user.get({ plain: true}));
    res.render('listBreakdown', { payments })
});

router.get('/lists',  async (req,res) => {
    const listsData = await List.findAll();
    const lists = listsData.map((user) => user.get({ plain: true}));
    res.render('lists', { lists })
});

router.get('/login',  (req,res) => {
    res.render('login')
});

router.get('/main',  async (req,res) => {
    res.render('main')
});

router.get('/userInfo/user', async  (req,res) => {
    const usersInfo = await User.findAll();
    const userData = usersInfo.map((user) => user.get({ plain: true}));
    res.render('userInfo', { userData })
});

router.get('/userInfo/', (req,res) => {
    res.render('userInfo')
});

router.get('/test',  (req,res) => {
    res.send('test')
});

module.exports = router;