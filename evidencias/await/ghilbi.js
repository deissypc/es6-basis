const axios = require('axios')

let config = {
    method:'get',
    url:"https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"

}
const f = async()=>{
try {
   let response = await axios(config)
  console.log( response.data.title)

} catch (error) {
    console.error(error)
}
}
f()