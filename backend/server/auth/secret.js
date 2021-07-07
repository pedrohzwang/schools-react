const encrypt = require('crypto-js');
const jwt = require('jsonwebtoken');

const authSecret = 'secretapp';
const blacklist = [];

exports.signToken = (userId, expire) => {
    return jwt.sign({ userId: userId }, authSecret, { expiresIn: expire });
}

exports.verifyJWT = (req, res, next) => {
    console.log(req.userId);
    if (!req.headers) {
        console.log("sem header"); 
        return res.status(401).end();
    }

    const token = req.headers['x-access-token'];
    const index = blacklist.findIndex(item => item === token);

    if (index !== -1) {
        return res.status(401).end();
    }
    jwt.verify(token, authSecret, (err, decoded) => {
        try {
            console.log(decoded);
            console.log("bateu aqui");
            console.log("req.userId:");
            //console.log(req.userId);
            console.log("decoded.userId");
            //console.log(decoded.userId);
            return next();
            //req.userId = decoded.userId;
            //return next();
        } catch (err) {
            console.log(err);
            return res.status(401).end();
        }
    });
    /*try {
        console.log(decoded);
        console.log("bateu aqui");
        console.log("req.userId:");
        console.log(req.userId);
        console.log("decoded.userId");
        console.log(decoded.userId);
        req.userId = decoded.userId;
        
        
    } catch (err) {
        return res.status(401).end();
    }*/
    console.log(decoded);
    return next();

}

exports.addBlacklist = (token) => {
    blacklist.push(token);
}