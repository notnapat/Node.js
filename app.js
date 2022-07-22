// EJS Template Engine 
//  1. หยุดsever  >ติดตั้ง  ใน cmd  > npm install ejs > run sever
//  2. สร้างโฟเดอร์  views  > สร้างไฟล์ index.ejs ไว้ข้างใน
// 3. เรียกใช้  ejs template  ในไฟล์ myrouter.js
// 4. ดึงข้อมูล ejs ด้วย router มาที่ไฟล์ index.js หรือ app.js เพื่อให้แสดงบน sever 
const express = require('express')
const path = require('path')
const app = express()
const router = require('./routers/myrouter')

app.set('views',path.join(__dirname,'views')) // views
app.set('view engine' ,'ejs')

app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public'))) // static
app.use(router)// ดึงมาจาก ไฟล์ myrouter.js
app.listen(8000,()=>{
      console.log("รัน server ที่ port 8000")
})

//________________________________________________________________________________________________________________________________

// // Static file   .static + public file path ดึงข้อมูลมาแสดงอย่างง่าย
// const express = require('express')
// const path = require('path')
// const app = express()

// app.use(express.static(path.join(__dirname,'public'))) // static

// app.listen(8000,()=>{
//       console.log("รัน server ที่ port 8000")
// })

//____________________________________________________________________________________________________________________________________________

// // +myrouter.js    router รับส่งข้อมูล > router paramiter ใช้ get ID >Redirect ใช้กลับหน้าแรก
// const express = require('express') // เรียกใช้ express แสดงไฟล์ไปยัง server ต้องติดตั้งก่อน npm install express
// const app = express() // ใช้  express ผ่านตัวแปร app
// const router = require('./routers/myrouter.js') // ดึงไฟล์ myrouter.js

// app.use(router) // import จาก myrouter

// app.listen(8000,()=>{
//       console.log("รัน server ที่ port 8000")
// })

//__________________________________________________________________________________________________________________________________

// express and โมดูลพาท ใช้ระบุพาท
// const express = require('express') // เรียกใช้ express แสดงไฟล์ไปยัง server ต้องติดตั้งก่อน npm install express
// const app = express() // ใช้  express ผ่านตัวแปร app
// const path = require('path') // เรียกใช้ โมดูลพาท

// // app.use((req,res)=>{  // .use ใช้แค่หน้าเดียว
// //       res.send("<h1>Hello Express.js</h1>")  // .send ใช้ส่งข้อความ
// // })

// // ตำแหน่งไฟล์
// // const indexPage = path.join(__dirname,"templates/index.html")

// app.get("/",(req,res)=>{ // .get ใช้รับข้อมูล หลายพาท
//       res.status(200)  // แจ้ง status code
//       res.type('text/html') //กำหนดรูปแบบเนื้อหา
//       res.sendFile(path.join(__dirname,"templates/index.html"))
// })

// app.get("/product",(req,res)=>{
//       res.sendFile(path.join(__dirname,"templates/product1.html"))
// })

// app.listen(8000,()=>{
//       console.log("รัน server ที่ port 8000")
// })

//____________________________________________________________________________________________________________________________________________________

// // โมดูล urlเชื่อม HTML Template   index.js > product1.html > product2.html > product3.html
// const http = require('http') // โมดูลเรียกใช้หน้าเว็บ
// const fs = require('fs') //โมดูลเรียกใช้ไฟล์ 
// const url = require('url') //โมดูล url 

// const indexPage = fs.readFileSync(`${__dirname}/templates/index.html`,'utf-8')
// const productPage1= fs.readFileSync(`${__dirname}/templates/product1.html`,'utf-8')
// const productPage2= fs.readFileSync(`${__dirname}/templates/product2.html`,'utf-8')
// const productPage3= fs.readFileSync(`${__dirname}/templates/product3.html`,'utf-8')

// const server = http.createServer((req,res)=>{
      
//       const {pathname,query} = url.parse(req.url,true)      
     
//       if(pathname=="/" || pathname=="/home"){
//              res.end(indexPage)
//       }else if(pathname=="/product"){
//             if(query.id == "1"){
//                   res.end(productPage1)
//             }else if (query.id == "2"){
//                   res.end(productPage2)
//             }else if (query.id == "3"){
//                   res.end(productPage3)
//             }else {
//                   res.writeHead(404)
//                   res.end("<h1>Not Found</h1>")
//             }
//       }else{
//             res.writeHead(404)
//             res.end("<h1> Not Found</h1>")
//       }
   

// })
// server.listen(3000,"localhost",()=>{
// console.log("start server in port 3000")
// })

//____________________________________________________________

// // โมดูล url เชื่อมไฟล์เขียนเอง หน้าเว็บผ่านกดลิงก์ Index.js > index.html > product.html
// const http = require('http') //เรียกใช้หน้าเว็บ
// const fs = require('fs') //เรียกใช้ไฟล์ 

// const indexPage = fs.readFileSync(`${__dirname}/webpages/index.html`)
// const productPage = fs.readFileSync(`${__dirname}/webpages/product.html`)
// const server = http.createServer((req,res)=>{

//       const pathName = req.url
//       console.log("url = ",pathName)
              
//       if(pathName=="/" || pathName=="/home"){
//             res.end(indexPage)
//       }else if(pathName=="/product"){
//             res.end(productPage)
//       }else{
//             res.writeHead(404)
//             res.end("<h1> Not Found</h1>")
//       }
   

// })
// server.listen(3000,"localhost",()=>{
// console.log("start server in port 3000")
// })

//_______________________________________________________________________________________________________________

// // Routing  = url  "ตั้งค่า เพื่มหน้า/ เปลื่ยน  ตอบกลับว่าอยู่หน้าไหน " 
// const http = require('http')

// const server = http.createServer((req,res)=>{
//       const pathName = req.url
//       console.log("url = ",pathName)
              
//       if(pathName=="/" || pathName=="/home"){
//        const myhtml = `
//       <body style=" background-color: black ; 
//       color:green"
//       >
//       <h1>aaaaa</h1>
//       <p>33333bbbbb</p> 
//       </body>`
//             res.end(myhtml)
//       }else if(pathName=="/product"){
//             res.end("<h1> Hello Peoduct</h1>")
//       }else{
//             res.writeHead(404)
//             res.end("<h1> Not Found</h1>")
//       }
   

// })
// server.listen(3000,"localhost",()=>{
// console.log("start server in port 3000")
// })

//_________________________________________________________________________________________________________________________________________________

//  สร้าง  Web Server ด้วย Node.js (จำลอง Server)

//  1.
// const http = require('http')

// const server = http.createServer(function(req,res){

//       const myhtml = `
//       <body style=" background-color: black ; 
//       color:green"
//       >
//       <h1>aaaaa</h1>
//       <p>33333bbbbb</p> 
//       </body>`
     
// //    res.write(myhtml)
// //       res.end() 
//      res.end(myhtml)
// })
// server.listen(3000,"localhost",()=>{
// console.log("start server in port 3000")
// })

// 2.
// const http = require('http')

// http.createServer((req,res)=>{
//       res.write("<h1>111NNNNN44445555 </h1>")
//       res.end() 
// }).listen(8000,()=>{
//       //ให้แสดงเมื่อรัน Server
// console.log("start server in port 8000")
// })



//____________________________________________________________________________________________________________


// //Modules fs Asynchronous(Non-Blocking) อ่าน และ เขียนไฟล์  Index.txt + input.js + output.txt
// const fs = require('fs')

// //Modu fs Asyn อ่านไฟล์จาก input.txt
// fs.readFile("myFile/input.txt", 'utf-8', (err, data) => {
//       if (err) return console.log("เกิดข้อผิดผลาด", err)

//       // Modu fs Asyn เขียนไฟล์ เพิ่มข้อมูลไปยัง output.txt
//       const outputText = `1สร้างไฟล์ output.txt พร้อมกับเขียนข้อมูลลงไป\n${data}\n3ไฟล์ถูกเขียนเมื่อ${new Date()}`
//       fs.writeFile("myFile/output.txt", outputText, err => {
//             if (err) return console.log("เกิดข้อผิดผลาด", err)
//             console.log(data)
//             setTimeout(() => {
//                  console.log("หน่วง") 
//             },3000);
//             console.log(outputText)
//             console.log("เขียนไฟล์เรียบร้อย")
//       })
// })

//__________________________________________________________________________________________________________________


// // Modules fs  Synchronous(Blocking) อ่าน และ เขียนไฟล์  Index.txt + input.js + output.txt
// const fs = require('fs')

// //Modu fs Syn อ่านไฟล์จาก input.txt

// const data = fs.readFileSync('myFile/input.txt','utf-8')
// console.log(data)

// //Modu fs Syn เขียนไฟล์ เพิ่มข้อมูลไปยัง output.txt
// const outputText = `1สร้างไฟล์ output.txt พร้อมกับเขียนข้อมูลลงไป\n${data}\n3ไฟล์ถูกเขียนเมื่อ${new Date()}`
// fs.writeFileSync("myFile/output.txt",outputText)
// console.log(outputText)
//             setTimeout(() => {
//                  console.log("หน่วง11") 
//             },3000);
// console.log("เขียนไฟล์เสร็จเรียบร้อย")

//___________________________________________________________________________________________________________________

// // Modules Basic  Index.js + mymodules.js = ดึงฟังชั่นจากอีกไฟล์มาใช้
// const mymodules = require ('./modules/mymodules')

// const number = 300000

// console.log(mymodules.getCurrenttime())
// console.log(mymodules.add(40,20))
// console.log(mymodules.formatNumber(number))