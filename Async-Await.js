
// ควบคุมการทำงานของ Asynchronous ให้ทำงานเป็นลำดับ ตามความต้องการ มี 3 รูปแบบ
// setTimeout ใช้หน่วงเวลา

// //  1. CallBack Contro Asyn

// const url1 = "notnapat/filel1.json"
// const url2 = "notnapat/file2json"
// const url3 = "notnapat/file3.json"
// const url4 = "notnapat/file4.json"
// const url5 = "notnapat/file5.json"

// function downloading(url, callback) {
//       console.log("กำลังโหลดไฟล์จาก", url)
//       setTimeout(() => {
//             callback(url)
//       },1000)
// }

//// CallBack Hell
// downloading(url1, function (result) {
//       console.log("ดาวโหลด", result, "เรียบร้อย")
//       downloading(url2, function (result) {
//             console.log("ดาวโหลด", result, "เรียบร้อย")
//             downloading(url3, function (result) {
//                   console.log("ดาวโหลด", result, "เรียบร้อย")
//                   downloading(url4, function (result) {
//                         console.log("ดาวโหลด", result, "เรียบร้อย")
//                         downloading(url5, function (result) {
//                               console.log("ดาวโหลด", result, "เรียบร้อย")
//                         })
//                   })
//             })
//       })
// })

//// 2. Promise Contro Asyn
// const connect = true //เช็คว่าต่อเน็ต
// const url1 = "notnapat/file1.json"
// const url2 = "notnapat/file2json"
// const url3 = "notnapat/file3.json"
// const url4 = "notnapat/file4.json"
// const url5 = "notnapat/file5.json"

// function downloading(url) {
//       return new Promise(function (resolve, reject) {
//             console.log("กำลังโหลดไฟล์จาก", url)
//             setTimeout(() => {
//                   if (connect) {
//                         resolve(`โหลดไฟล์จาก ${url} เรียบร้อย`)
//                   } else {
//                         reject("เกิดข้อผิดผลาด")
//                   }
//             }, 1000)
//       })
// }

//// Promise Hell
// downloading(url1).then(function (result) {
//       console.log(result)
//       downloading(url2).then(function (result) {
//             console.log(result)
//             downloading(url3).then(function (result) {
//                   console.log(result)
//             })
//       })
// })

////Promise Then
////Then น่าจะเป็นตัวจัดลำดับการแสดงผล
// downloading(url1).then(result=>{
//       console.log(result)
//       return downloading(url2)
// }).then(function(result){
//       console.log(result)
//       return downloading(url3)
// }).then(function(result){
//       console.log(result)
//       return downloading(url4)
// }).then(function(result){
//       console.log(result)
//       return downloading(url5)
// }).then(function(result){
//       console.log(result)
// }).catch(err=>{
//       console.log(err)
// }).finally(()=>{
//       console.log("จบการทำงาน")
// })

// 3. Asynsc/Await Contro Asyn  

const connect = true //เช็คว่าต่อเน็ต
const url1 = "notnapat/file1.json"
const url2 = "notnapat/file2json"
const url3 = "notnapat/file3.json"
const url4 = "notnapat/file4.json"
const url5 = "notnapat/file5.json"

function downloading(url) {
      return new Promise(function (resolve, reject) {
            console.log("กำลังโหลดไฟล์จาก", url)
            setTimeout(() => {
                  if (connect) {
                        resolve(`โหลดไฟล์จาก ${url} เรียบร้อย`)
                  } else {
                        reject("เกิดข้อผิดผลาด")
                  }
            }, 1000)
      })
}

async function start(){
      console.log(await downloading(url1))
      console.log(await downloading(url2))
      console.log(await downloading(url3))
      console.log(await downloading(url4))
      console.log(await downloading(url5))
}

start()