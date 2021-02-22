import express, { response } from 'express';

const app = express();
 
app.get("/", (Request, response) =>{
    return response.send("olá! NLW-04")
})

app.post("/", (Request, response) =>{
    return response.json("os dados foram salvos com sucesso!")
})

app.listen(3333, () => console.log("server is running!"));
