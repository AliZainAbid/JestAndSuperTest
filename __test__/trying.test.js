const request = require('../commonTests');

describe('reproduce test', () => {
    test('get request', async () => {
       await request.request.get(`api/users`)
        .expect(200).then((Response) => {
            console.log(Response.body)
        })
    })
})