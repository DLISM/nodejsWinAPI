const express = require("express");

const app = express();

const hello_world = require('bindings')('get_users')

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.post('/check-user', (req, res)=>{
    let username= req.body.username
    if(username=="")
        return res.redirect('/')
    else
        return res.redirect("/?username="+username)
})
const PORT =3000

app.listen(PORT, ()=>{

    console.log("Сервер зпаущен!");
    console.log(hello_world.getUsers());

})