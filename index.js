
let app = require('./app.js');
const http = require('http');

/** fs stands for non global module datsy we need to import it*/

/** Only importing the file system one function insteaD importing ALL fs 
 * 
 */
let text = require('fs').writeFileSync;

console.warn("jai mata di");
var a = 10;
var b = 20;
var c = 10;
var e = a+b+c;
console.log(e);
console.log(app);
const arr = [2,4,6,8,2,4,8];

let testfilter = arr.filter((item)=>{
    
    return item==6;
})
/** Console is a Global module so we dont need to import it */
console.warn(testfilter);



text("JMD2.txt","Jai Mata Di - Maa I Want to be the Bestest Full Stack developer");
console.log("->>",__dirname);
console.log("->>",__filename);

/** For passing function as a parameter */
const ataconbtrol = (req, resp)=>
{

        resp.write("<h1>Hi, This is Nitika.. Jai Mata di</h1>");
        resp.end();

}
http.createServer(ataconbtrol).listen(4800);

