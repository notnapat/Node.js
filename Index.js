// 
const http = require('http') //เรียกใช้หน้าเว็บ
const fs = require('fs') //เรียกใช้ไฟล์ 

// fs.readFileSync(__dirname)

const server = http.createServer((req,res)=>{
      const pathName = req.url
      console.log("url = ",pathName)
      console.log("dir = ",__dirname)
              
      if(pathName=="/" || pathName=="/home"){
       const myhtml = `
      <body style=" background-color: black ; 
      color:green"
      >
      <h1>aaaaa</h1>
      <p>33333bbbbb</p> 
      </body>`
            res.end(myhtml)
      }else if(pathName=="/product"){
            res.end("<h1> Hello Peoduct</h1>")
      }else{
            res.writeHead(404)
            res.end("<h1> Not Found</h1>")
      }
   

})
server.listen(3000,"localhost",()=>{
console.log("start server in port 3000")
})

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