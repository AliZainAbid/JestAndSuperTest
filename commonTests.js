var supertest = require('supertest'); //require supertest
 const request = supertest('https://reqres.in/'); //supertest hits the HTTP server (your app)

//const request = supertest('http://localhost:3000/');

/*
This piece of code is for getting the authorization token after login to your app.
const token;
test("Login to the application", function(){
    return request.post(``).then((response)=>{
        token = response.body.token  //to save the login token for further requests
    })
}); 
*/

module.exports = 
{
    request
    //, token     -- export if token is generated
}