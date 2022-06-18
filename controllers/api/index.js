const router = require('express').Router();
const userRoutes = require('./user-routes');
const listRoutes = require('./list-routes');
const paymentRoutes = require('./payment-routes');

router.use('/users', userRoutes);
router.use('/lists', listRoutes);
router.use('/payments', paymentRoutes);

module.exports = router;