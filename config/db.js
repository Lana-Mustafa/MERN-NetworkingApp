const mongoos = require('mongoose');

const config = require('config');

const db = config.get('mongoURI');

// underline return promise , call back function
/* mongoos.connectDB(db); */

// wait to connect to database 
const connectDB= async () => {
    try{
        await mongoos.connect(db ,{
            useNewUrlParser:true ,
            useUnifiedTopology:true
        });
    } catch (err){
        console.error(err.message);
        //to exit from process and this to pervent it from try to connect 
        // (1) force it to exit 
        process.exit(1);
    }
    
   }
   module.exports =connectDB ;