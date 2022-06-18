const router = require('express').Router();
const {List} = require('../../models');

//Create new list
router.post('/', async (req, res) => {
   try {
       const newList = await List.create({
           title: req.body.title,
       });
       res.status(200).json(newList);
   } catch (error) {
       console.log(error);
       res.status(500).json(error);
   }
});

module.exports = router;