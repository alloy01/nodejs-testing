// With the help promises + callbacks
const fetchData1 = (url) => {
    return fetch(url).then(response => response.json())
    .then(data => {
        return data
    });
}

test("fetches data from api through method 1.", () => {
    return fetchData1("https://jsonplaceholder.typicode.com/todos/1").then(data => {
        expect(data).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        });
    });
});




// With the help of async-await
const fetchData2 = async (url) => {
    const response = await fetch(url);
    const data = response.json();
    return data;
}

test("fetches data from api through method 2.", async () => {
    const data = await fetchData2("https://jsonplaceholder.typicode.com/todos/1");
    expect(data).toEqual({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    });
});
