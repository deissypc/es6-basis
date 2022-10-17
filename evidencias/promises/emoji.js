const axios = require('axios')

let config = {
    method:'get',
    url:"https://emojihub.herokuapp.com/api/all"

}
const f = async()=>{
try {
   let response = await axios(config)
   response.data.forEach(anime => {
    console.log(`emoji:${anime.name}`)
    console.log(`//////////`)
});
} catch (error) {
    console.error(error)
}
}
f()