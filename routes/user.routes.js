const express = ('express');
const app = express();

const userRoute = express.Router();
let User = require('../model/User');

userRoute.route('/').get((req, res) => {
    User.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})