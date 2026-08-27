// Mocking

// Suppose this function sends an email to the user
const sendEmail = (email) => {
    console.log(`Email sent to ${email}`);
}


// Function that depends on sendEmail
const registerUser = (email) => {
    sendEmail(email);
    return "User registered";
}


// Mock the function
const mockSendEmail = jest.fn();


// Function using the mocked dependency
const registerUserWithMock = (email) => {
    mockSendEmail(email);
    return "User registered";
}


// Test whether the mocked function was called
test("sends email when user registers", () => {
    registerUserWithMock("user@gmail.com");

    expect(mockSendEmail).toHaveBeenCalled();
});




// Test whether the mocked function was called with a particular value
test("sends email to the correct user", () => {
    mockSendEmail.mockClear();

    registerUserWithMock("test@gmail.com");

    expect(mockSendEmail).toHaveBeenCalledWith("test@gmail.com");
});




// Test how many times the mocked function was called
test("sends only one email", () => {
    mockSendEmail.mockClear();

    registerUserWithMock("user@gmail.com");

    expect(mockSendEmail).toHaveBeenCalledTimes(1);
});




// Mock return values

const mockGetUser = jest.fn();


// Configure what the mocked function should return
mockGetUser.mockReturnValue({
    name: "Aj",
    role: "User"
});


test("returns mocked user", () => {
    const user = mockGetUser();

    expect(user.name).toBe("Aj");
    expect(user.role).toBe("User");
});




// Mock implementation

const mockAddNum = jest.fn();


// Instead of the original function we can provide our own implementation
mockAddNum.mockImplementation((a, b) => {
    return a + b;
});


test("adds numbers using mocked implementation", () => {
    expect(mockAddNum(5, 7)).toBe(12);
});




// Mock resolved values for async functions

const mockFetchUser = jest.fn();


// Suppose the actual function would make an API request.
// Instead we directly provide the result.

mockFetchUser.mockResolvedValue({
    id: 1,
    name: "Aj"
});


test("returns mocked async user", async () => {
    const user = await mockFetchUser();

    expect(user.name).toBe("Aj");
});




// Mock rejected values

const mockFetchData = jest.fn();


// Suppose an API request fails.
// We can simulate that without making an actual API request.

mockFetchData.mockRejectedValue(
    new Error("Failed to fetch data")
);


test("throws mocked fetch error", async () => {
    await expect(mockFetchData()).rejects.toThrow(
        "Failed to fetch data"
    );
});




// Above examples show the basic idea of mocking. Instead of running an actual
// dependency such as an API request, database query or email service, we replace
// it with a fake function and simply check how our code interacts with it.



// // Example of checking multiple calls

// const mockLogger = jest.fn();

// const performTasks = () => {
//     mockLogger("Task 1");
//     mockLogger("Task 2");
// }

// test("calls logger twice", () => {
//     performTasks();

//     expect(mockLogger).toHaveBeenCalledTimes(2);
// });




// // Example of checking the last call

// const mockFunction = jest.fn();

// mockFunction("First call");
// mockFunction("Second call");

// test("checks the last mocked call", () => {
//     expect(mockFunction).toHaveBeenLastCalledWith(
//         "Second call"
//     );
// });