const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const User = require('../../models/User');

/**
 * @api {get} /api/auth Get user by token
 * @apiGroup auth
 * @apiError (500) ServerError Server Error
 * @apiError (401) UnauthorizedError No token, authorization denied || Token is not valid
 * @apiHeader x-auth-token
 * @apiSuccessExample {json} Success-Response:
 *     200 OK
 *     {
 *   "_id": "603a9b8c62204b062b2e2c4b",
 *   "name": "gooseNJuice",
 *   "email": "zamirkononov@gmail.com",
 *   "phoneNumber": "+972532470000",
 *   "__v": 0
 *     }
 */
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

/**
 * @api {post} /api/auth Authenticate user & get token
 * @apiGroup auth
 * @apiError (400) BadRequest Please include a valid email
 * @apiError (400) BadRequest Password is required
 * @apiError (400) BadRequest Invalid Credentials
 * @apiError (500) ServerError Server Error
 * @apiParam email
 * @apiParam password
 * @apiSuccessExample {json} Success-Response:
 *     200 OK
 *     {
 *     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAzYzhjNDhlMjIxYzgyMmEwMzU1ZWFiIn0sImlhdCI6MTYxNDU4MzQxMywiZXhwIjoxNjE1MDE1NDEzfQ.8Qvgs3oPwdBjRAy8KSMbxNBqWKI97Nr_ADcL_RlyuQc"
 *     }
 *
 */
router.post(
    '/',
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {email, password} = req.body;

        try {
            let user = await User.findOne({email});

            if (!user) {
                return res
                    .status(400)
                    .json({errors: [{msg: 'Invalid Credentials'}]});
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res
                    .status(400)
                    .json({errors: [{msg: 'Invalid Credentials'}]});
            }

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