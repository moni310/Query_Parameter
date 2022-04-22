// var promise = new Promise(function(resolve, reject) {
//     const x = "moni";
//     const y = "moni"
//     if(x === y) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
     
//   promise.
//       then(function () {
//           console.log('Success, You have done');
//       }).
//       catch(function () {
//           console.log('Some error has occurred');
//       });



// const axios = require('axios').default;
// const express = require("express");
// const app = express()

// axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(resp => {
//         console.log(resp.data);
//     })
//     .catch(err => {
//         // Handle Error Here
//         console.error(err);
//     });

//     app.listen(4000, function(){
//       console.log("server started--")
//   })


const axios = require('axios');

const p = new Promise (function(resolve,reject){

    if (resolve){
        resolve()
    }
    else{
        reject()

    }
})
p
    .then(function() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
    })
    .catch(function() {
        // Handle Error Here
        console.error(err);
    })
p();

app.listen(4000, function(){
    console.log("server started--")
})