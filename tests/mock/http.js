

const { http } = require('../../lib/functions');



// http.defaults.headers.common['x-api-key']="42051160403a11e98f723752f967fed2"



let sucess = true

http.interceptors.request.use((config) => {
    return  null;
},(err) => {
    console.log(err)
})

http.interceptors.response.use((response) =>{
    console.log(response)
} , (error) => {
    return sucess ? Promise.resolve({data:"channel909877"}): Promise.reject({response:{status:401} })
})






// console.log(http)

module.exports = (value) => {
    sucess = value
};