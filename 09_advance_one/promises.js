const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // eg. DB calls , cryptography, network operations
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

// +++++++++++++++++++++++++++++||+++++++++++++++++++++++++++++++++++




new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is complete");
        resolve()
    },5000)
}).then(function(){
    console.log("Async 2 resolved");
})



// +++++++++++++++++++++++++++||+++++++++++++++++++++++++++++++++++++


// PASSING PARAMETER

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Promise 3 complete");
        resolve({username: "Chai", email: "chai@example.com"})
    },2000)
})

promiseThree.then(function(passed_parameter_from_above_Promise){
    console.log(passed_parameter_from_above_Promise);
})




//++++++++++++++++++++++++++++++++++++||+++++++++++++++++++++++++++++



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Promit", password: "12345"})
        }else{
            reject("!ERROR occured: something went wrong")
        }
    },7000)
})


promiseFour.then((user) => {
    console.log(user);
    return user.username          // here the return value goes to 
}).then((username) => {           // the next .then method as input .
    console.log(username);        // (CHAINING)
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Whatever error occured or not ....Your promise is executed");
})

// .then is linked to (resolve) and .catch is linked to (reject)



//+++++++++++++++++++++++++++++++++||++++++++++++++++++++++++++++++++



// handling promises without using (.then), (.catch) but Async 
// functionality and try - catch block

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}




// +++++++++++++++++++++++++++++++||+++++++++++++++++++++++++++++++++




// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
