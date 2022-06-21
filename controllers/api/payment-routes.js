const router = require('express').Router();
const {Payment} = require('../../models');
const authenticateToken = require('../../utils/helpers');

//Create new payment
router.post('/', authenticateToken, async (req, res) => {
   try {
       const newPayment = await Payment.create( {
           description: req.body.description,
           amount: req.body.amount,
           creditorId: req.user.userId,
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

router.get('/listpayments/:id', authenticateToken, async (req, res) => {
    try {
        const payments = await Payment.findAll( {
            where: {
                listId: req.params.id,
            },
        });
        res.status(200).json(payments);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;