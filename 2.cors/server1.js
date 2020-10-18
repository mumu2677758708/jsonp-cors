let express = require('express')
let app = express()
// 以当前目录当成静态资源目录 即可以访问localhost:3000/index.html
app.use(express.static(__dirname))
app.listen(3000)