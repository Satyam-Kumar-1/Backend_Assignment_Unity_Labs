const mongoose=require('mongoose');
const url='mongodb://127.0.0.1:27017/Unity_Assign';

mongoose.connect(url).then(()=>{
    console.log("Database connected")
}).catch((e)=>{
    console.log(`Error in database connection ${e}`)
});