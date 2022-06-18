const router = require('express').Router();
const {Payment} = require('../../models');

//Create new payment
router.post('/', async (req, res) => {
   try {
       const newPayment = await Payment.create( {
           description: req.body.description,
           amount: req.body.amount,
           creditorId: jwt.userID, //TODO get userId from cookie/session/jwt
           debtorId: req.body.debtorId,
           isPayed: false,
           listId: req.body.listId,
       });
       res.status(200).json(newPayment);
   } catch (error) {
       console.log(error);
       res.status(500).json(error);
   }
});

module.exports = router;