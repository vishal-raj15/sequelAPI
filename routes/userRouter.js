const usercontroller = require('../controllers/user.controller.js');

const router = require("express").Router();

router.post('/adduser', usercontroller.addUser);
router.get('/all', usercontroller.getUsers);
router.put('/update/:id', usercontroller.updateUser);
router.post('/delete', usercontroller.deleteUser);

module.exports = router;


