// import db functions
const db = require('../db/db');
// import bcrypt, password hashing
const bcrypt = require('bcrypt');


// Http response handler for a login request
exports.login = async (req, res) => {
    // destructure email and password from request body
    const { email, password } = req.body;

    // fetch credentials from database
    const user = db.selectAccount(email, password);

    // if the user exists
    if (user) {
        // check if received password matches encrypted password 
        const valid = bcrypt.compareSync(password, user.password);
        // if passwords match
        if (valid) {

        // if passwords do not match
        } else {
        // send invalid credentials response
            res.status(403).send()
        }

       
    // if the user does not exist
    } else {
    // send invalid credentials response. Send 403 and not 404 for added security layer
        res.status(403).send()
    }
}