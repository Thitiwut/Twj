import Users from '../src/User';
// import 'isomorphic-fetch';
it('Api test',async function(){
     global.fetch = jest.fn().mockImplementation(()=>{
         const p = new Promise((resolve,reject)=>{
             resolve({
                 json:function(){
                     return {Id:1}
                 }
             })
         })
         return p
     })
     const response = await Users.all();
     console.warn(response);
     expect(response.Id).toBe(1);
    //  expect(response.movies[2].title).toEqual('The Matrix');
})