// IIFE -> Immediately invoked function expressions(IIFE)

(function chai() {
    // Named IIFI
    console.log(`DB Connected`)
}) ();

((name) => {
    // Unnamed IIFI 
    console.log(`DB connected two ${name}`);
    
})("abhishek")
