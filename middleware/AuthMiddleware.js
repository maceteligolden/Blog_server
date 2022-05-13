const jwt = require('jsonwebtoken')

const Authorise = async (req, res, next) => {

        const token = req.headers.cookie.split('=')[1];
       
        if (token == null) {
          return res.sendStatus(401) // There isn't any token.
        } else {
                jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
                        console.log(err)
                        if (err) {
                                console.log('authenticateToken-403')
                                return res.sendStatus(403)
                        }
                        req.user = user
                        next()
                        })
        }
        
}

module.exports = Authorise