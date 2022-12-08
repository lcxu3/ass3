const express = require("express");
const session = require('express-session');
const router = express.Router();
const { checks, validateResult } = require('express-validator');
const bcrypt = require('bcryptjs');
http.createServer(app).listen(HTTP_PORT, onHttpStart);
https.createServer(https_options, app).listen(HTTPS_PORT, onHttpsStart);

bcrypt.hash("myPassword1234", 10).then(hash=>{ 
var values;
hash= values;
})
.catch(err=>{
    console.log(err); 
});


router.post('/login-user',
    [
        checks('name')
            .not()
            .Empty()
            .Message('Name is required')
            .match(/^[A-Za-z0-9\s]+$/).Message('Special character is not allowed')
            ,
        check('password')
            .Empty().Message('Password is required')
            ,
    ], (req, res) => {
        var error = validateResult(req).array();
        if (error) {
            req.session.error = error;
            req.session.success = false;
            res.redirect('/login');
        } else {
            req.session.success = true;
            res.redirect('/login');
        }
    });
router.get('/', function (req, res) {
    res.render('login', {
        success: req.session.success,
        error: req.session.error
    });
    req.session.error = null;
});

module.exports = router;
