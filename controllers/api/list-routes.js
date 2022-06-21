const router = require('express').Router();
const {List, UserList, Payment, User} = require('../../models');
const authenticateToken = require('../../utils/helpers');
const sequelize = require('../../config/connection');
const {Sequelize} = require("sequelize");

//Create new list
router.post('/', authenticateToken, async (req, res) => {
   try {
       const newList = await List.create({
           title: req.body.title,
       });
       const newUserList = await UserList.create({
           userId: req.user.userId,
           listId: newList.listId,
       });
       res.status(200).json(newList);
   } catch (error) {
       console.log(error);
       res.status(500).json(error);
   }
});

router.get('/medeben', authenticateToken, async (req, res) => {
    try {
        const [lists] = await sequelize.query(`select distinct listId from payment where creditorId = ${req.user.userId};`);
        console.log(lists);
        res.status(200).json(lists);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/lesdebo', authenticateToken, async (req, res) => {
    try {
        const [lists] = await sequelize.query(`select distinct listId from payment where debtorId = ${req.user.userId};`);
        console.log(lists);
        res.status(200).json(lists);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/balance', authenticateToken, async (req, res) => {
    try {
        const [medeben] = await sequelize.query(`select sum(amount) as medeben from payment where creditorId = ${req.user.userId};`)
        const [lesdebo] = await sequelize.query(`select sum(amount) as lesdebo from payment where debtorId = ${req.user.userId};`)
        const balance = medeben[0].medeben - lesdebo[0].lesdebo;
        res.status(200).json({balance: balance});
    }catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.post('/adduser', authenticateToken, async (req, res) => {
    try {
        const newUserList = await UserList.create( {
            userId: req.body.userId,
            listId: req.body.listId,
        });
        res.status(200).json(newUserList);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;