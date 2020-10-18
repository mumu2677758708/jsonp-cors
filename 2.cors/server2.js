let express = require('express')
let app = express()

// 白名单，存储允许拿到数据的地址
let whiteLists = ['http://localhost:3000']
app.use(function(req,res,next){
    let origin = req.headers.origin
    if(whiteLists.includes(origin)){
        // 设置哪个源可以访问我
        res.setHeader('Access-Control-Allow-Origin',origin) // origin设为*时，会和
        // 允许携带哪个头访问我
        res.setHeader('Access-Control-Allow-Headers','name')
        // 允许哪个方法访问我
        res.setHeader('Access-Control-Allow-Methods','PUT')
        // 预检的存活时间  在规定时间内会发一次请求，超出时间会发两次请求：一次get,一次OPTIONS
        res.setHeader('Access-Control-Max-Age',100)
        // 允许携带cookie
        res.setHeader('Access-Control-Allow-Credentials',true)
        // 允许前端获取哪个头
        res.setHeader('Access-Control-Expose-Headers','sex')
        if(req.method === 'OPTIONS'){
            res.end() // OPTIONS请求不做任何处理
        }
    }
    next()
})
app.get('/getData',function(req,res){
    console.log(req.headers)
    res.setHeader('sex','man')
    res.end('我不爱你')
})
app.listen(4000)