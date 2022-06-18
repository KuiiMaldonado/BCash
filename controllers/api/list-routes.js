const router = require('express').Router();
const {List, UserList} = require('../../models');

//Create new list
router.post('/', async (req, res) => {
   try {
       const newList = await List.create({
           title: req.body.title,
       });
       //TODO create a record under UserList table for the new list that was created
       // const newUserList = await UserList.create({
       //     userId: jwt.userId,
       //     listId: newList.listId,
       // });
       res.status(200).json(newList);
   } catch (error) {
       console.log(error);
       res.status(500).json(error);
   }
});

module.exports = router;