const express=require('express');
const app=express();
const port=5000;
require('./config');
app.use(express.json());
app.use('/api/auth',require('./Routes/Auth'));
app.use('/api/buyer',require('./Routes/Buyer'));
app.use('/api/seller',require('./Routes/Seller'));
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})