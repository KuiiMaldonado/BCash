const router = require('express').Router();
const {List, UserList} = require('../../models');
const authenticateToken = require('../../utils/helpers');

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

module.exports = router;