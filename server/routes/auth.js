const express = require('express');
const router = express.Router();

//middlewares
const {authCheck} = require('../middlewares/auth');

//controller
const { createOrUpdateUser } = require('../controllers/auth');

const myMiddleware = () => {
    console.log('I m middleware Yay');
    next();
}

router.post('/create-or-update-user',authCheck, createOrUpdateUser);

router.get('/testing', myMiddleware, (req,res) => {
    res.json({
        data: 'successfully tried middleware',
    })
})

module.exports = router;
