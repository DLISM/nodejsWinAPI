const express = require("express");
const userList = require('bindings')('get_users')

const app = express();

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.post('/check-user', (req, res)=>{
        res.send({ message: "OK", user: findUser() , otvet: "dasdsa"});
})


function findUser(){
    let usersList = userList.getUsers().split(" ");

    if(usersList.find(el=>el==="admin"))
        return true;
    else
        return false;
}
const PORT =3000

app.listen(PORT, ()=>{
    console.log("Сервер зпаущен! http://localhost:"+PORT);
})
