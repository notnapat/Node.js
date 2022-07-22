// บันทึกข้อมูลจาก form บนเว็บลง  MongoDB   product.js + myrouter.js
// ใช้งาน mongoose
const mongoose = require('mongoose')

// เชื่อมไปยัง MongoDB
const dbUrl = 'mongodb://localhost:27017/productDB'
mongoose.connect(dbUrl,{
      useNewUrlParser:true,
      // useUnifiedTopologe:true //ถ้าไม่คอมเม็นต์ก็รันไม่ได้ บอกไม่ซัพพอร์ต
}).catch(err=>console.log(err)) //แสดงเมื่อเออเรอร์

// ออกแบบ Schema
let productSchema = mongoose.Schema({
      name:String,
      price:Number,
      image:String,
      description:String
})

// สร้างโมเดล
let Product = mongoose.model("products",productSchema)

// ส่งออกโมเดล
module.exports = Product

//ออกแบบฟังก์ชั่นสำหรับบันทึกข้อมูล
module.exports.saveProduct=function(model,data){
      model.save(data)
}