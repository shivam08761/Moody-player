var Imagekit = require('imagekit')
var mongoose = require('mongoose')


var imagekit = new Imagekit({
    publicKey : process.env.IMAGEKIT_PUBLICKEY,
    privateKey:process.env.IMAGEKIT_PRIVATEKEY,
    urlEndpoint : process.env.IMAGEKIT_ENDPOINT
});



function uploadfile(file){
    return new Promise((resolve , reject) => {

        imagekit.upload({
            file:file.buffer,
            fileName:new mongoose.Types.ObjectId().toString(),
            folder:"cohort-audio",

        },(error, result)=>{
            if(error){
                reject(error);
            }
            else{
                resolve(result);
            }
        }
    )

    });
};

module.exports = uploadfile;