const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const User = require('../../models/User')

/**
 * @api {post} api/users Register user
 * @apiGroup users
 * @apiError (400) BadRequest Name us required
 * @apiError (400) BadRequest Please include a valid email
 * @apiError (400) BadRequest Please enter a password with 6 or more characters
 * @apiError (400) BadRequest Please enter a valid phone number
 * @apiError (400) BadRequest User already exists
 * @apiError (500) ServerError Server error
 * @apiExample {json} Success-Response:
 *     200 OK
 *     {
 *     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAzYzhjNDhlMjIxYzgyMmEwMzU1ZWFiIn0sImlhdCI6MTYxNDU4MzQxMywiZXhwIjoxNjE1MDE1NDEzfQ.8Qvgs3oPwdBjRAy8KSMbxNBqWKI97Nr_ADcL_RlyuQc"
 *     }
 */
router.post('/',
    check('name', "Name us required").notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 8, max: 24}),
    check('phoneNumber', 'Please enter a valid phone number').isMobilePhone(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        const {name, email, password, phoneNumber} = req.body;

        try {
            let user = await User.findOne({email})

            if (user) {
                return res.status(400).json({errors: [{msg: 'User already exists'}]});
            }

            user = new User({
                name, email, password, phoneNumber
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                {expiresIn: '5 days'},
                (err, token) => {
                    if (err) throw err;
                    res.json({token});
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;