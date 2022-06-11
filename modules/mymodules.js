// Modules Basic
function getCurrenttime(){
    return new Date()
}

function add (x,y){
    return x+y
}

function formatNumber(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

module.exports.getCurrenttime = getCurrenttime
module.exports.add = add
module.exports.formatNumber = formatNumber
