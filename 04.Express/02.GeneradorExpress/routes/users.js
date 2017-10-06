var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let x = 0
    let y = 1
    let z = y / x
    res.render('users', { title: z });
});

module.exports = router;