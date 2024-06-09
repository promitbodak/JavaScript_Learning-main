// Immediately Invoked Function Expressions (IIFE)

/*
IFFE is mainly used to execute a function immidiately 
without being exposed to the pollution of global scope 
sometime there maybe some variables or code snippet that
might cause problem to the execution of certain functions 
to avoid such situations IFFE is used
*/

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

/*
IFFE can be called via arrow function also but there migth
be problems due to multiple IFFE use to avoid getting error
dont forget to manually stpo the execution of IFFE using a 
";" SEMI-COLON....as its shown in the above example
 */

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
