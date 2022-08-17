const User = require("../../models/user");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const user = require("../../models/user");

const postRegister = async (req, res) => {
    try{
        const {username, mail, password} = req.body;

        const userExists = await User.exists({mail: mail.toLowerCase()});

        if (userExists){
            return res.status(409).send('E-mail already in use');
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        // create user document and save in dB

        const createdUser = await User.create({
            username,
            mail: mail.toLowerCase(),
            password: encryptedPassword
        });
        // create JWT token
        const token = jwt.sign({
            userId: user._id,
            mail
        },
         process.env.TOKEN_KEY,{
            expiresIn: "24h",
         }
        );

        res.status(201).json({
            newUser: {
                mail: createdUser.mail,
                token: token,
                username: createdUser.username
            }
        })
    } catch (err){
        return res.status(500).send('Error occured. Please try again');
    }
};


module.exports = postRegister;