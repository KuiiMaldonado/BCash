const router = require('express').Router();
const apiRoutes = require('./api');

const list = require('../models/List');
const Payment = require('../models/Payment');
const User = require('../models/User');
const UserList = require('../models/UserList');

router.use('/api', apiRoutes);

router.get('/',  (req,res) => {
    res.render('main')
});

router.get('/userInfo',  (req,res) => {
    res.render('userInfo')
});

router.get('/test',  (req,res) => {
    res.send('test')
});

module.exports = router;