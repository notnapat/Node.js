// ส่งข้อมูลแบบ Array Object เอาข้อมูลจาก index.html มาแปลงลง index-obj.ejs แล้วส่งค่าไป loop ใน index-obj.ejs
// <%- include('ขื่อไฟล์ ') %>  navbar
const express = require('express')
const router = express.Router()

// เรียกใช้ ejs template
router.get('/',(req,res)=>{
      const products = [
            {name:"โน๊ตบุ๊ค",price:500,image:"images/products/product1.png"},
            {name:"เสื้อ",price:200,image:"images/products/product2.png"},
            {name:"หูฟัง",price:200,image:"images/products/product3.png"}
      ]
      res.render('index-obj',{products:products})

})

router.get('/addForm',(req,res)=>{
      res.render('form')

})

router.get('/manage',(req,res)=>{
      res.render('manage')

})

//____________________________________________________________________________________________________________________________________

// // ส่งข้อมูลแบบ Array
// const express = require('express')
// const router = express.Router()

// // เรียกใช้ ejs template
// router.get('/',(req,res)=>{
//       const products = ["เสื้อ","พัดลม","หูฟัง","คีย์บอร์ด"]
//       res.render('index',{products:products})

// })

//__________________________________________________________________________________________________________________________________________________

// // ส่งข้อมูลไปยัง EJS Template  <+>  index.ejs
// const express = require('express')
// const { render } = require('express/lib/response')
// const router = express.Router()

// // เรียกใช้ ejs template
// router.get('/',(req,res)=>{
//       const name = "napat"
//       const age = 20
//       const address = "<h2>พิจิตร</h2>"
//       res.render('index',{name:name,age:age,address:address})
// })

//________________________________________________________________________________________________________________________________________________

////router
// const express = require('express') // เรียกใช้ express แสดงไฟล์ไปยัง server ต้องติดตั้งก่อน npm install express
// const router = express.Router() //ใช้รับส่งข้อมูล  ผู้ใช้กับ server
// const path = require('path')

// router.get("/", (req, res) => { // .get ใช้รับข้อมูล หลายพาท
//       res.status(200)  // แจ้ง status code
//       res.type('text/html') //กำหนดรูปแบบเนื้อหา
//       res.sendFile(path.join(__dirname, "../templates/index.html"))
// })

// router.get("/product/:id", (req, res) => {
//       const productID = req.params.id  // paramiter id เรียกใช้ id เมื่อค้นหา id ใน ช่อง url  > router จะหาหรือเปิดไฟล์ หรือ url ตามที่ ระบึ
//       if (productID == "1") {
//             res.sendFile(path.join(__dirname, "../templates/product1.html"))
//       } else if (productID == "2") {
//             res.sendFile(path.join(__dirname, "../templates/product2.html"))
//       } else if (productID == "3") {
//             res.sendFile(path.join(__dirname, "../templates/product3.html"))
//       }else {
//             res.redirect('/') //กลับไปหน้าเดิม
//       }
// })

module.exports = router