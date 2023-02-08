const express = require("express");
const userList = require('bindings')('get_users')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.get('/how-it-work', (req, res)=>{
    res.sendFile(__dirname+"/views/howItWork.html")
})

app.get('/author', (req, res)=>{
    res.sendFile(__dirname+"/views/author.html")
})

app.post('/check-user', (req, res)=>{
    let username = req.body.username
    res.send({ message: findUser(username)});
})


function findUser(username){
    let usersList = userList.getUsers().split(" ");

    if(usersList.find(el=>el===username))
        return `Пользователь ${username} есть`;
    else
        return `Пользователь ${username} нет`;
}
const PORT =3000

app.listen(PORT, ()=>{
    console.log("Сервер зпаущен! http://localhost:"+PORT);
})
