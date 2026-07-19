const mongoose = require('mongoose')

function ConnectToDB (){


    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("connected to Databse");
        
    })

    .catch((err)=>{
                  console.log("error occur", err);
    })

}

module.exports = ConnectToDB