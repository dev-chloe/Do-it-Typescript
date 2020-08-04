let add = new Function('k', 'w', 'd', 'return k * w + d')
// let add = function (k, w, d) {return k * w + d}
let result = add(9, 10, 3)
console.log(result)