
const request = require('../commonTests');

describe('Test Suite for get request try', () => {

try{

    test('trying get request for general test', async () => {
       await  request.request.get(`cars`)
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
            "id": "3",
            "name": "city new",
            "company": "honda",
            "model": "2017"
        };
        let id = 3;

        test('post try', async () => {
           await request.request.post(`cars`)
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
            
            await  request.request.get(`cars/${id}`)
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

    let putDetails = {"id":"3",
    "name": "Honda 3",
    "company": "HondaA",
    "model": "2012"};

    let id = 2;

    test('put test', async () => {
        await request.request.put(`cars/${id}`)
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
        await request.request.delete(`cars/${id}`)
        
        .expect(200)
        .then(res => {
            console.log('Put response: ', res.body)
        })
    })
})
