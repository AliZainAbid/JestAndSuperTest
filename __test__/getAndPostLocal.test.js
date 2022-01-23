const request = require('../commonTests');


test('Nothing to worry about it for now ', () => {
    console.log('Just go with the flow')
});


describe("GET all user details", () => {
  
    try{
        beforeEach(function () {
          console.log("GET all users details ")
      });
            
        afterEach(function () {
          console.log("All users' details are retrieved")
      });
  
        test("GET user output", async done =>{

         await request.request.get(`api/users`) //get() of supertest
                                  //.set('Authorization', `Token ${request.token}`) 
                                  .expect(200)
                                  .then((response) =>{
                                  console.log("GET RESPONSE : ", response.body);
                                  done();
                      })
        })
      }
    catch(err){
      console.log("Exception : ", err)
      }
  });
