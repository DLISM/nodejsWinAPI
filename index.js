const express = require("express");
const userList = require('bindings')('get_users')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.post('/check-user', (req, res)=>{
    let username = req.body.username
    res.send({ message: "OK", user: findUser(username) , otvet: "dasdsa"});
})


function findUser(username){
    let usersList = userList.getUsers().split(" ");

    if(usersList.find(el=>el===username))
        return true;
    else
        return false;
}
const PORT =3000

app.listen(PORT, ()=>{
    console.log("Сервер зпаущен! http://localhost:"+PORT);
})
