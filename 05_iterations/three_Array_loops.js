// ARRAY SPECIFIC LOOPING

// ++++++++++++++++||+++++++++++++++++++++++++++++++++++
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]  // it worka not only on arrays but also on (strings), (maps), and others
                            //  (Objects) are not iteratable by this
for(const num of arr){
    // console.log(num);
}

const greetings = "Hello world"
for(const greet of greetings){
    // console.log(greet);
}

// ++++++++++++++++++++++++||+++++++++++++++++++++++++++++++++++++++++++++++

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")

// console.log(map);

//Using FOR OF loop in maps
for(const [key, value] of map){
    // console.log(key ,"------>", value);
}



// LOOPS FOR OBJECTS

// for in    LOOP          // {this loop only returns the keys of things}
                           // eg. in case of array it returns indices, not values
const myObj = {
    c: 'C language',
    js: 'javascript',
    cpp: 'C++',
    py: 'Python',
    rb: 'ruby'
}

for(const key in myObj){
    console.log(`${key} corresponds to -> ${myObj[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }