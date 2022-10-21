const axios = require('axios')

let config = {
    method:'get',
    url:"https://emojihub.herokuapp.com/api/all"

}

axios(config)
    .then((response)=>{
       return response.data.forEach(emoji => {
        console.log(`emoji:${emoji.name}`)
        console.log(`//////////`)
       });
    })
    .catch((error)=>{
        console.log(error)
    })