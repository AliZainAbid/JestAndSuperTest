
const request = require('../commonTests');

describe('Test Suite for get request try', () => {

try{

    test('trying get request for general test', async () => {
       await  request.request.get(`api/users`)
        .expect(200)
        .then(res => {
            console.log(res.body)
        })
    })
}
catch(err){
    console.log(err.body)
}
})



describe('post test suite', () => {

    try{

     let   carDetails = {
            name: "morpheus",
      job: "leader",
        };
        let id = 2;

        test('post try', async () => {
           await request.request.post(`api/users`)
            .send(carDetails)
            .expect(201)
            .then(Response => {
                console.log('Header Date: ', Response.headers.date)
                console.log('Header: ', Response.header)
                console.log('Post API response: ', Response.body)
                console.log('response body id: ', Response.body.id)
            })
        })

        test('trying get request after post', async () => {
            
            await  request.request.get(`api/users/${id}`)
             .expect(200)
             .then(res => {
                 console.log(res.body)
             })
         })



    }
    catch(err){
        console.log('Error of try block: ', )
    }

})


describe('put method check', () => {

    let putDetails = {
     "name": "morpheus",
    "job": "zion resident"
    };

    let id = 2;

    test('put test', async () => {
        await request.request.put(`api/users/${id}`)
        .send(putDetails)
        .expect(200)
        .then(res => {
            console.log('Put response: ', res.body)
        })
    })
})



describe('delete method check', () => {

    

    let id = 2;

    test('delete test', async () => {
        await request.request.delete(`api/users/${id}`)
        
        .expect(204)
        .then(res => {
            console.log('Put response: ', res.body)
        })
    })
})
