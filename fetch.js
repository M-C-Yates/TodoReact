const axios = require('axios');
const api = "https://secure-crag-83596.herokuapp.com"

axios(`${api}/users`, {
  method: 'post',
  data: {
    "email": "Marigi121@gmail.com",
    "password": "Yates121"
  }
}).then((res) => {
  console.log(res.headers['x-auth'])
  console.log(res.data)
}).catch((e) => console.log(e));
