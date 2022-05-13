const mongoose = require('mongoose');
const User = require('../models/UserModel')
const collection = require('mongoose')

const connect = async (dbname, dbusername, dbpassword) => {

  try{

    await mongoose.connect(`mongodb+srv://${dbusername}:${dbpassword}@${dbname}.5niks.mongodb.net/WishList?retryWrites=true&w=majority`)

    console.log('database connected')

  }catch(err){

    console.log(err)

  }

}

const createModel = (model) => {

   mongoose.Schema(model)

}

const setModel = (modelname, schema) => {
  mongoose.model(modelname, schema)
}

const createData =  async (model, data) => {

  try{

     const createdata = await model.create(data);

     return createdata;

  }catch(err){

    return err

  }

}

const readData = async (model, data) => {
  try{

    const result = await model.find(data)

    if(result === undefined) {
      return 'data not found';
    }
  
    return result;

  }catch(err){

    return err.message;

  }
}

const readsingleData = async (model, data) => {
  try{

    const result = await model.findOne(data)
  
    if(result === null) {
      return null;
    }
   
      return result;
    
   

  }catch(err){

    return err.message;

  }
}

const updateData = async (model, keyword, data) => {
  try{

    return await model.updateOne(keyword, data)

  }catch(err){
    return err.message
  }
}

const deleteData = async (model, keyword) => {
  try{

    return await model.deleteOne(keyword)

  }catch(err){
    
      return err.message
    
  }
}

module.exports = {
  collection,
  connect,
  createModel,
  createData,
  readData,
  readsingleData,
  updateData,
  setModel,
  deleteData
}