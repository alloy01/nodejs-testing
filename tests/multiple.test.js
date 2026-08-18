// Now for obvious reasons we just can't write a whole authorization and authentication code so we will simply make use of logs on console




// Setup hook function
const authenticate = () => {
    console.log("authenticated");
}
// Configure the setup hook ( ALL )
beforeAll(() => {
    authenticate();
});

// // Configure the setup hook ( EACH )
// beforeEach(() => {
//     authenticate();
// });

// // As for async functions just add async await while configuring setup hook
// beforeAll(async () => {
//     await authenticate();
// });




// Teardown hook function
const cleanUp = () => {
    console.log("cleared");
}
// Configure the teardown hook ( ALL )
afterAll(() => {
    cleanUp();
});

// Configure the teardown hook ( EACH )
// afterEach(() => {
//     cleanUp();
// });


// Function to be tested
const add_num = (a, b) => {
    console.log("add_num ran");
    return a + b;
}
// Actual test
test("adds number with hooks", () => {
    expect(add_num(5, 7)).toEqual(12);
});




// Above example was just a gist of how this actually works, I'm going to write few more tests but comment them out. So that there won't be many logs that might hinder in our future tests. To run these tests just UNcomment them and run




// // Function to be tested
// const mult_num = (a, b) => {
//     console.log("mult_num ran");
//     return a * b;
// } 
// // Test
// test("multiplies number with hooks", () => {
//     expect(mult_num(5, 6)).toBe(30);
// });




// // Function to be tested 
// const div_num = (a, b) => {
//     console.log("div_num ran");
//     return a / b;
// }
// // Test
// test("divides numbers with hooks", () => {
//     expect(div_num(8, 4)).toEqual(2);
// });