//Modules fs Asynchronous(Non-Blocking) อ่าน และ เขียนไฟล์  Index.txt + input.js + output.txt
const fs = require('fs')

//Modu fs Asyn อ่านไฟล์จาก input.txt
fs.readFile("myFile/input.txt", 'utf-8', (err, data) => {
      if (err) return console.log("เกิดข้อผิดผลาด", err)

      // Modu fs Asyn เขียนไฟล์ เพิ่มข้อมูลไปยัง output.txt
      const outputText = `1สร้างไฟล์ output.txt พร้อมกับเขียนข้อมูลลงไป\n${data}\n3ไฟล์ถูกเขียนเมื่อ${new Date()}`
      fs.writeFile("myFile/output.txt", outputText, err => {
            if (err) return console.log("เกิดข้อผิดผลาด", err)
            console.log(data)
            setTimeout(() => {
                 console.log("หน่วง") 
            },3000);
            console.log(outputText)
            console.log("เขียนไฟล์เรียบร้อย")
      })
})
