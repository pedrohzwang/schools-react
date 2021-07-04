const encrypt = require('crypto-js');
const jwt = require('jsonwebtoken');

const authSecret = 'secretapp';
const blacklist = [];

exports.signToken = (userId, expire) => {
    return jwt.sign({userId: userId}, authSecret, {expiresIn: expire});
}

exports.verifyJWT = (req, res, next) => {

    if (!req.headers) {
        return res.status(401).end();
    }

    const token = req.headers['x-acces-token'];
    const index = blacklist.findIndex(item => item === token);

    if (index !== -1) {
        return res.status(401).end();
    }

    jwt.verify(token, authSecret, (err, decoded) => {
        try {
            req.userId = decoded.userId;
            return next();
        } catch (err) {
            return res.status(401).end();
        }
    })
}

exports.addBlacklist = (token) => {
    blacklist.push(token);
}