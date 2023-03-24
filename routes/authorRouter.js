const authorcontroller = require('../controllers/author.controller.js');

const router = require("express").Router();

router.post('/add', authorcontroller.addAuthor);
router.get('/all', authorcontroller.getAuthors);
router.put('/update/:id', authorcontroller.updateAuthor);
router.post('/delete', authorcontroller.deleteAuthor);
router.get('/author/:id', authorcontroller.getById);

module.exports = router;


