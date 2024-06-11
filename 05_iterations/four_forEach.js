// FOR_EACH


const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item){  // for using forEach the basic syntax is
    console.log(item);            // arrayName.forEach( call_back_function )
})                                // syntax of callback fXn => function (val){function_Body}
                                  // Arrow functions can also be used in the place of call_back fXn

coding.forEach((item) =>{
    console.log(`Arrow fXn ------>${item}`);
})      



// YOU can use external functions in forEach loop also
// Dont execute the function JUST pass the reference of it inside forEach (see bellow example)

//external Function
function printMe(item){
    console.log(`from external fXn --> ${item}`);
}
//execution
coding.forEach(printMe)    // only reference passed . not given '()' at end




// It has access to multiple elements not just items
// like (index), (full array)
coding.forEach((item, index, arraa) => {  // the names dosent matter but its about the relative order of parameters
    console.log(item , index, arraa);     // 1st = item , 2nd = index , 3rd = full array
})



//+++++++++++++++++++++++++++++++++++++++||+++++++++++++++++++++++++++++++++++++++++++++

// Accessing object arrays (very IMPORTANT -> in terms of BACKEND response receiveables)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )