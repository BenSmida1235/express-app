const express = require('express')

const app = express()

const PORT = 3000 || process.env.PORT

app.use(express.static('public'))


app.get('/' , (req,res)=>{
const date = new Date()
let day = date.getUTCDay();

const hours = date.getHours()

if (day>0 && day<6 && hours>8 && hours<18) {
res.sendFile(__dirname + "/home/home.html");
}

else {
    res.sendFile(__dirname + "/close/close.html");
}






})







app.get('/contact' , (req,res) => {
const date = new Date();
let day = date.getUTCDay();

const hours = date.getHours();

if (day > 0 && day < 6 && hours > 8 && hours < 18) {
  res.sendFile(__dirname + "/contact/contact.html");
} else {
  res.sendFile(__dirname + "/close/close.html");
}



})






app.get('/services', (req, res) => {
   const date = new Date();
   let day = date.getUTCDay();

   const hours = date.getHours();

   if (day > 0 && day < 6 && hours > 8 && hours < 18) {
     res.sendFile(__dirname + "/services/services.html");
   } else {
     res.sendFile(__dirname + "/close/close.html");
   }



})








app.listen(PORT , () => {
    console.log("Port is running on Port ${PORT}")
})