const router = require('express').Router();
const {User} = require('../../models');

//Create new user
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
        res.status(200).json(newUser);
    }catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;