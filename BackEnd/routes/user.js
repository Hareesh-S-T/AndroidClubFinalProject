const router = require('express').Router();
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

//USE TOKEN AS A PARAM
router.get('/profile', async (req, res) => {
    // console.log("TESTING")
    const decoded = jwt.decode(req.headers.authorization, { complete: true });
    // console.log(decoded.payload['_id']);

    try {
        const user = await User.findById(decoded.payload['_id']);
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

router.post('/editcheck', async (req, res) => {
    const decoded = jwt.decode(req.headers.authorization, { complete: true });
    try {
        const user = await User.findOne({
            _id: decoded.payload['_id']
        });
        if (user) {
            const pwCheck = await bcryptjs.compare(req.body.password, user.password);
            if (pwCheck) {
                res.status(200).send("Request accepted.");

            } else {
                res.status(400).send("Incorrect password entered.");
            }
        } else {
            res.status(400);
        }
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

router.post('/savechanges', async (req, res) => {
    const decoded = jwt.decode(req.headers.authorization, { complete: true });
    try {
        await User.findOneAndUpdate(
            {
                _id: decoded.payload['_id'],
            },
            {
                name: req.body.name,
                dob: req.body.dob,
                pfpURL: req.body.pfpURL,
            });
        // console.log("Changes Saved");
        res.status(200).send("Changes saved.");
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

// router.get('/notes', async (req, res) => {
//     const decoded = jwt.decode(req.headers.authorization, { complete: true });
//     try {
//         const user = await User.findById(decoded.payload['_id']);
//         res.status(200).send(user);
//     } catch (err) {
//         console.log(err);
//         res.status(400).send(err);
//     }
// })

router.post('/updatenotes', async (req, res) => {
    const decoded = jwt.decode(req.headers.authorization, { complete: true });
    // console.log(req.body);
    try {
        await User.findOneAndUpdate(
            {
                _id: decoded.payload['_id'],
            },
            {
                notes: req.body.notes,
            });
        res.status(200).send("Changes saved.");
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

module.exports = router;