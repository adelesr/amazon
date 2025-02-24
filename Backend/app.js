import express from 'express';
import { config } from 'dotenv';

const app = express();
config();
const port=process.env.PORT||3030;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    console.log('hello')
})