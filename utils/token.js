const jwt = require('jsonwebtoken');

const generateToken = (payload, secret) => {
  const token = jwt.sign(payload, secret)
  return token;
}

const verifyToken = (payload, secret) => {
  const result = jwt.verify(payload, secret);

  if(!result){
    return false;
  }

  return true;
}

module.exports = {
  generateToken,
  verifyToken,
}