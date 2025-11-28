import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({
    origin:[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:3000",
        //add production url
    ]}
));

app.get("/api/message", (req,res)=>{

    res.json({message: "hit the server!"});
})

const port = 4242;
app.listen(port,"0.0.0.0", ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});