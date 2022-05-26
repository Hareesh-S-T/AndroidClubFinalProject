const router = require('express').Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SERVERMAILID,
        pass: process.env.SERVERMAILPW,
    }
});

//EDIT THE CATCH ERROR IN THIS

router.post('/registration', async (req, res) => {
    let otp = Math.floor((Math.random() * 9000) + 1000);
    const salt = await bcryptjs.genSalt(10);
    console.log(otp);
    let mailOptions = {
        from: process.env.SERVERMAILID,
        to: req.body.email,
        subject: 'Code for Account Confirmation',
        text: `Your 4 digit code to confirm the account belonging to ${req.body.name} is ${otp}.`
    }
    try {
        const hashedPW = await bcryptjs.hash(req.body.password, salt);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPW,
            otp: otp,
            dob: req.body.dob
        })
        try {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    res.status(400).send("Mail could not be sent.");
                } else {
                    console.log('Code Sent: ' + info.response);
                    res.status(200).send("Account created.");
                }
            })
        } catch (err) {
            res.status(400).send(err);
        }
    } catch (err) {
        console.log(err)
        res.status(400).send("An account associated with this email ID already exists.");
    }
})

router.post('/signin', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        })
        if (user) {
            const pwCheck = await bcryptjs.compare(req.body.password, user.password);

            if (pwCheck) {
                if (user.verified == true) {
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY)
                    res.header('authorization', token).status(200).send("Logged in.");
                } else {
                    res.status(400).send("Account not confirmed.");
                }
            } else {
                res.status(400).send("Incorrect email or password entered.");
            }
        } else {
            res.status(400).send("Incorrect email or password entered.");
        }
    } catch (err) {
        console.log(err)
        res.status(400).send("Request could not be processed, try again later.");
    }
})

router.post('/confirm', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        })

        if (req.body.otp == user.otp) {
            await User.findOneAndUpdate(
                {
                    email: user.email,
                },
                {
                    verified: true,
                })
            res.status(200).send("Account confirmed.");
        } else {
            res.status(400).send("Confirmation code does not match.");
        }
    } catch (err) {
        res.status(400).send("Request could not be processed, try again later.");
    }
})

router.post('/resendCode', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })

        let mailOptions = {
            from: process.env.SERVERMAILID,
            to: req.body.email,
            subject: 'Code',
            text: `Your 4 digit code is ${user.otp}.`
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.status(400).send("Mail could not be sent.");
            } else {
                console.log('Code Sent: ' + info.response);
                res.status(200).send("Account created.");
            }
        })
    } catch (err) {
        res.status(400).send("Request could not be processed, try again later.");
    }
})

//EDIT THE CATCH ERROR IN THIS

router.post('/forgotPWA', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })
        let otp = Math.floor((Math.random() * 9000) + 1000);
        console.log(otp);
        await User.findOneAndUpdate(
            {
                email: user.email,
                verified: true,
            },
            {
                otp: otp,
            })

        let mailOptions = {
            from: process.env.SERVERMAILID,
            to: req.body.email,
            subject: 'Code',
            text: `Your 4 digit code is ${otp}.`
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.status(400).send("Mail could not be sent.");
            } else {
                console.log('Code Sent: ' + info.response);
                res.status(200).send("Forgot password code sent.")
            }
        })

    } catch (err) {
        res.status(400).send("Account associated with this email ID does not exist or has not been verified.");
    }
})

router.post('/forgotPWB', async (req, res) => {
    try {
        const salt = await bcryptjs.genSalt(10);
        const hashedPW = await bcryptjs.hash(req.body.password, salt);
        const user = await User.findOne({
            email: req.body.email
        })
        if (req.body.otp == user.otp) {
            await User.findOneAndUpdate(
                {
                    email: user.email,
                    verified: true,
                },
                {
                    password: hashedPW,
                })
            res.status(200).send("Password reset.")
        } else {
            res.status(400).send("Incorrect confirmation code.");
        }

    } catch (err) {
        console.log(err)
        res.status(400).send("Request could not be processed, try again later.");
    }
})

module.exports = router;