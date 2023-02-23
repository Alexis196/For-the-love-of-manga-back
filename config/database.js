import mongoose  from "mongoose";
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO)
    .then(() => console.log('Database conected'))
    .catch((error) => console.log(error))