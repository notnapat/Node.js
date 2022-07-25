// ส่งข้อมูลแบบ Array Object เอาข้อมูลจาก index.html มาแปลงลง index-obj.ejs แล้วส่งค่าไป loop ใน index-obj.ejs
// <%- include('ขื่อไฟล์ ') %>  navbar
const express = require('express')
const router = express.Router()

//เรียกใช้งานโมเดล Product บันทึกข้อมูลลง MongoDB
const Product = require('../models/products.js')


// เรียกใช้ตัวอัพโหลดไฟล์  Multer  
// อัพโหลดไฟล์ขึ้น Sever && MongoDB   >  myrouter.js + products.js
const multer = require('multer')

const storage = multer.diskStorage({
      destination:function(req,file,cb){
            cb(null,'./public/images/products') // ตำแหน่งจัดเก็บไฟล์
      },
      filename:function(req,file,cb){
            cb(null,Date.now()+".jpg") // เปลี่ยนชื่อไฟล์ ไม่ให้ชื่อซ้ำกัน
      }
})
// เริ่มต้น upload รูปภาพ ด้วย Multer
const upload = multer({
      storage:storage
})

// ดึงข้อมูล จาก mongodb มาแสดงหน้าเว็บหลังหรือ index.ejs
router.get('/',(req,res)=>{
      Product.find().exec((err,doc)=>{
            res.render('index-obj.ejs',{products:doc})
      })
})

// // เรียกใช้ ejs template
// router.get('/',(req,res)=>{
//       const products = [
//             {name:"โน๊ตบุ๊ค",price:500,image:"images/products/product1.png"},
//             {name:"เสื้อ",price:200,image:"images/products/product2.png"},
//             {name:"หูฟัง",price:200,image:"images/products/product3.png"}
//       ] 
//       res.render('index-obj.ejs',{products:products})

// })

// 
// แสดง url ตามพาท
// ก่อนจะเข้าหน้า manage ให้ ล็อกอินก่อน
router.get('/manage',(req,res)=>{

      if(req.cookies.login){
            Product.find().exec((err,doc)=>{
                  res.render('manage',{products:doc})
            })
      }else{
            res.render('admin') // เข้าสู่ระบบ
      }
})

// แสดง url ตามพาท
// ก่อนจะเข้าหน้า form เพิ่มข้อมูลให้ ล็อกอินก่อน
router.get('/addform',(req,res)=>{
      if(req.cookies.login){
            res.render('form')  // บันทักสินค้า
      }else{
            res.render('admin') // เข้าสู่ระบบ
      }

})
// ออกจากระบบ เคลีย cookie
router.get('/logout',(req,res)=>{
      res.clearCookie('username')
      res.clearCookie('password')
      res.clearCookie('login')
      res.redirect('/manage')
})

// ดึงข้อมูลจาก mongodb มาแสดงในหน้าเว็บ แก้ไข  หรือ manage.ejs
router.get('/manage',(req,res)=>{
      Product.find().exec((err,doc)=>{
          res.render('manage',{products:doc})     
      })
   })






// login เช็ค  username พร้อมเก้บ cookie ตั้วเ่วลาจัดเก็บ cookie  + app.js + admin,ejs + 404.ejs + manage.ejs + form.ejs
 router.post('/login',(req,res)=>{
      const username = req.body.username
      const password = req.body.password
      const timeExpire = 20000 // 10 วินาที

      if(username === "aaa" && password === "111"){
            // สร้าง cookie
            res.cookie('username',username,{maxAge:timeExpire})
            res.cookie('password',password,{maxAge:timeExpire})
            res.cookie('login',true,{maxAge:timeExpire})   // true = เข้าสู่ระบบ
            res.redirect('/manage')
      }else{
            res.render('404')
      }
     
})  

   // ลบข้อมูลใน mongodb  ผ่าน id ที่ดึงมา  > manage.ejs
router.get('/delete/:id',(req,res)=>{
      // console.log(req.params.id)  // เช็คดูข้อมูลที่ส่งมาจาก mongodb
      Product.findByIdAndDelete(req.params.id,{useFindAndModify:false}).exec(err=>{
            if(err) console.log(err)
             res.redirect('/manage')
      })
           
      })

// เปรียบเที่ยบ และสอบถามข้อมูล ไปยัง mongodb + index.ejs + product.ejs
router.get('/:id',(req,res)=>{
      const product_id = req.params.id  // เช็ค id ที่รับมา ให้แสดงใน cmd
      console.log(product_id)
      Product.findOne({_id:product_id}).exec((err,doc)=>{  // เช็คว่า id มีใน mongodb รึป่าว , exec รันการทำงาน
            // console.log(doc)
        res.render('product',{product:doc})    
      })
      
})

// แก้ใขข้อมูล    + manage.ejs + edit.ejs
router.post('/edit',(req,res)=>{
      const edit_id = req.body.edit_id  // เช็ค id ที่รับมา ให้แสดงใน cmd  , edit_id = name in managem.ejs
      Product.findOne({_id:edit_id}).exec((err,doc)=>{  // เช็คว่า id มีใน mongodb รึป่าว , exec รันการทำงาน
            //นำข้อมูลเดิมที่ต้องการแก้ไข ไปแสดงในแบบฟอร์ม
            res.render('edit',{product:doc})
      })
      
})

// อัพเดทข้อมูลที่แก้ไขแล้วลง mongodb +  edit.ejs
router.post('/update',upload.single("image" ),(req,res)=>{
    
      //ข้อมูลใหม่ที่ถูกส่งมาจากฟอร์มแก้ไข
      let update_id = req.body.update_id
      let data = {
            name:req.body.name,
            price:req.body.price,
            description:req.body.description
      }
     // อัพเดทข้อมูล
     Product.findByIdAndUpdate(update_id,data,{useFindAndModify:false}).exec(err=>{
      res.redirect('manage')
     })
})



// //  form get
// router.get('/insert',(req,res)=>{      
//       console.log(req.query.name)  //  .query แสดงข้อมูลทั้งหมด   , .name แสดงแค่ชื่อ , .price แสดงแค่ราคา  ,  .description  
//       res.render('form')
// })



//  form post  > รับข้อมูลจาก form 
router.post('/insert',upload.single("image" ),(req,res)=>{
      console.log(req.file)
      // console.log(req.body.name)
      // console.log(req.body.price)
      // console.log(req.body.image)
      // console.log(req.body.description)
  
      // บันทึกข้อมูล ลง MongoDB
      let data = new Product({
            name:req.body.name,
            price:req.body.price,
            image:req.file.filename,   // เอาฟังชั่นเปลี่ยนชื่อมาใส่  ในฟิวนี้
            description:req.body.description
      })
      Product.saveProduct(data,(err)=>{
            if(err) console.log(err)  // ถ้า err ให้แสดง err
            res.redirect('/')  // บันทึกเสร็จให้กลับไปหน้าแรก
      })
      // console.log(data)
      // res.render('form')
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