const router = require('express').Router();
const {List, UserList, Payment} = require('../../models');
const authenticateToken = require('../../utils/helpers');
const sequelize = require('../../config/connection');

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

//TODO deudas(medeben) - lo que me deben(lesdebo) - balance
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

module.exports = router;