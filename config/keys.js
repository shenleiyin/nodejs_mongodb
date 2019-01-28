module.exports = {
    mongoURI: "mongodb://test:test123456@ds163054.mlab.com:63054/graduate",
    secretOrKey: "secret"
}


// if(process.env.NODE_ENV == "production"){
//     module.exports = {
//         //生产环境地址  网络数据库 
//         mongoURL:"mongodb://hotel:123456@localhost/hotel",
//         secretOrKey:"secret"
//     }
// }else{
//     module.exports = {
//         //开发环境地址 本地数据库
//         mongoURL:"mongodb://hotel:123456@localhost/hotel",
//         secretOrKey:"secret"

//     }
// }