const router = require('express').Router();
const clientProfileRoutes = require('./clientProfile');
const providerProfileRoutes = require('./providerProfile');
const reservationRoutes = require('./reservations');

router.use('/client-profile', clientProfileRoutes);
router.use('/provider-profile', providerProfileRoutes);
router.use('/reservation', reservationRoutes);

module.exports = router;
