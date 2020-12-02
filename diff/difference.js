var a = [2,1]
var b = [2,3]
var c = a.filter(function(v){ return b.indexOf(v) == -1 })//差集
console.log("a與b的差集：", c);