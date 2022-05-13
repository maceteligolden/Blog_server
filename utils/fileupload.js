const fileupload = require('express-fileupload');

let file;

let path;

const setFile = (file) => {
    this.file = file
}

const getFile = () => {

    if(this.file === null || this.file === undefined){
        return "file not set"
    }

    return this.file
}

const setPath = (path) => {
    this.path = path
}

const getPath = () => {

    if(this.path === null || this.path === undefined){
        return "path not set"
    }

    return this.path

}

const uploadFile = () => {
    return this.file.mv(this.path)
}

module.exports = {
    setFile,
    setPath,
    getFile,
    getPath,
    uploadFile
}