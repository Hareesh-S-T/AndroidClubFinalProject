const router = require('express').Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    // res.send("Testing");
    try {

        let otp = Math.floor((Math.random() * 9000) + 1000);
        console.log(otp);

        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            otp: otp

        })
        res.status(200).send("Account Created");
    } catch (err) {
        res.status(400).send(err);
    }
})

router.post('/signin', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        if (user) {
            if (user.verified == true) {
                res.status(200).send("Logged In");
            } else {
                res.status(400).send("Account not confirmed");
            }
        } else {
            res.status(400).send("Incorrect email or password entered");
        }
    } catch (err) {
        res.status(400).send(err);
    }

})

router.post('/confirm', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })

        if (req.body.otp == user.otp) {
            await User.findOneAndUpdate(
                {
                    email: user.email
                },
                {
                    verified: true
                })
            res.status(200).send("Account confirmed");
        } else {
            res.status(400).send("Confirmation Code does not match");
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

router.post('/resendCode', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })

        // Send EMAIL here


    } catch (err) {
        res.status(400).send(err);
    }
})

router.post('/forgotPWA', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })
        let otp = Math.floor((Math.random() * 9000) + 1000);
        console.log(otp);
        await User.findOneAndUpdate(
            {
                email: user.email
            },
            {
                forgotPWOTP: otp
            })
        //Send EMAIL with code
    } catch (err) {
        res.stayus(400).send(err);
    }
})

router.post('/forgotPWB', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })
        if (res.body.forgotPWOTP == user.forgotPWOTP) {
            await User.findOneAndUpdate(
                {
                    email: user.email
                },
                {
                    password: req.body.password
                })
        } else {
            res.status(400).send("Incorrect confirmation code");
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;