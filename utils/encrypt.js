const bcrypt = require('bcryptjs');

const hash = async (password) => {

const salt = await bcrypt.genSalt(10);

 return bcrypt.hash(
    password, 
    salt
);
}

const compareHash = async (password, dbpassword) => {

  if(bcrypt.compare(password, dbpassword)){
    return true
  }
  
  return false

}

module.exports = {
  hash,
  compareHash
}