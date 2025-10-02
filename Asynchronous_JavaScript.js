

// const dependent = true;

// function simple(callback) {
//   console.log("Step 1: Start");

//   if (dependent) callback();
// }

// function delay(callback) {
//   setTimeout(function () {
//     console.log("Step 2: Loading...");
//     callback();
//   }, 2000);
// }

// function delayTime() {
//   setTimeout(function () {
//     console.log("Step 3: Done!");
//   }, 1000);
// }

// simple(function () {
//   delay(delayTime);
// });



const orderNow = true;

function bookOrder() {
  console.log("You con Books Order");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Order Placed");
      
      if (orderNow) {
        resolve("Order Placed");
      } else {
        reject("error");
      }
    },100);
  });
  return promise;
}
function orderProceing() {


  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Processing Order');
      
     if(true){
             

      resolve("Processing Order");
     }else{
      reject("Processing Failed")
     }
      
    },1000);
  });
  return promise;
}

function processingShipped() {
  const promise = new Promise(function (resolve, reject) {
  
    
   setTimeout (function(){
      console.log('Shipped');
    resolve("Shipped");
   

   },1000)
  });
  return promise;
}

function delivered() {
  const promise = new Promise(function (resolve, reject) {




  setTimeout(function(){
    console.log('delivered');

resolve("delivered")

  },1000)
   
  });
  return promise;
}

bookOrder()
  .then(orderProceing)
  .then(processingShipped)
  .then(delivered)
  .then(function (value) {
    console.log("falin : "+value);
  })
  .catch(function (error) {
    console.log(error);
  });