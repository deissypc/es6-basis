const request = require('request')

let endpoint = 'https://fakestoreapi.com/products'

const r=request(endpoint, {json: true}, function(err,response,data){
    
    response.body.forEach(element => {
        console.log(`Tipo:${element.title}`)
        console.log('+++++++++++++++++')
    });
  

})