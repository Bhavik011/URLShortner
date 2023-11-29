require('dotenv').config( '.env');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const options = {
    keepAlive: true,
    useNewUrlParser: true,
    dbName: process.env.DB_NAME
  };

exports.connectToDatabase = async (req, res, next) => {
  
    console.log('----DB----CONNECTION-READYSTATE---------------',mongoose.connection.readyState)
      mongoose.connect(process.env.DB_STRING,options)
        .then(db => {
          console.log('----DB----NEW-CONNECTION-SUCCESS---------------');
          next()
      },
      err => {
        console.log('----DB----NEW-CONNECTION-FAILURE----------------');
        console.log(err);
        console.log(err);
        return res.send({
          status_code: 409,
          success: false,
          message: 'DB connection failure'
      });
        }
      );
    
  };

  // exports.connectDB= async()=>{
  //   try{
  //     const {connection} = await mongoose.connect("mongodb://127.0.0.1/urlShortner");
  //     console.log(`connected to : ${connection.host}`)
  //   }catch(err){
  //     console.log(err);
  //   }
  // }