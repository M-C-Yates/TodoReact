
const axios  = require('axios');

const api = "https://secure-crag-83596.herokuapp.com";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzgxNmQ0OGNmZjc3ODAwMTc3NjZjZWEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTUxOTg4Nzk3fQ.qCwt6W9-NIQb8LbEE-_edNILy09kvKuhRIZ8LkPPuxA";


axios(`${api}/todos`, {
  method: "get",
  headers: {
    "x-auth": token
  }
}).then(res => {
  console.log(res.data.todos);
  // dispatch(getTodos(res.data));
});
