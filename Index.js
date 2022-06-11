// Modules Basic  Index.js + mymodules.js = ดึงฟังชั่นจากอีกไฟล์มาใช้
const mymodules = require ('./modules/mymodules')

const number = 300000

console.log(mymodules.getCurrenttime())
console.log(mymodules.add(40,20))
console.log(mymodules.formatNumber(number))