var dt = require('date.js');
module.exports = (inp,func) => {
var delay = dt(inp) - new Date
if(!(inp&&func)) throw Error('Please input function and string')
if(delay==0) throw Error('Oops didnt understand')
setInterval(func,delay)
}
