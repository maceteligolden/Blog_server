const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel')


const login = async (req, res) => {
    try{

        //get login input
        const username = req.body.username;
        const password = req.body.password;

        //check if 
        const userExists = await User.findOne({username: username})
        if(userExists === null){
            res.json({
                message: "user not found",
                status: 404
            })
        }

        var userExistsPassword = userExists.password;
        var userExistsUsername = userExists.username;
        var userExistsID = userExists._id;

        if(username !== userExistsUsername){
            res.json({
                message: "user not found",
                status: 404
            })
        }
                if(bcrypt.compare(password, userExistsPassword)){
                    const user = {id: userExistsID, username: userExistsUsername}
                    
                    const token = await jwt.sign(user, process.env.SECRET_ACCESS_TOKEN,{
                        algorithm: "HS256",
                        expiresIn: 300,
                    });
                   
                            
                    return res.cookie("token", token, { maxAge: 300 * 1000 }).status(200).json({ msg: 'user exists',token})
                }
                else{
                    res.json("password is wrong")
                }
            


    }catch(err){
        res.json({msg: err.message})
    }
}

const register = async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10);

        let password = req.body.password;

        await bcrypt.hash(
            password, 
            salt,
            function(err, hash) {
                // Store new user with hashed password
                const user = new User;
                user.username = req.body.username;
                user.email = req.body.email;
                user.password = hash;
                user.save()
                res.status(200).json({user})
            },
        );
          
    }catch(err){
        res.status(500).json({msg: err.message})
    }
}

const changePassword = async (req, res) => {
    try{
        const username = req.params.username;
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        
        var userExists = await User.findOne({username});

        if(userExists.length == 0){
            res.json({msg: "user not found"})
        }else{
            await bcrypt.hash(
                password, 
                salt,
                function(err, hash) {
                    // Store new user with hashed password
                    const user = User.find({username: username});
                    user.password = hash;
                    user.save()
                    res.status(200).json({user})
                },
            );
        }

    }catch(err){
        res.json({msg: "something went wrong"})
    }
}

const forgotPassword = async (req, res) => {
    try{
        const email = req.body.email
    }catch(err){
        res.json({msg: "something went wrong"})
    }
}

module.exports = {login, register, changePassword, forgotPassword}

