const add_num = (x, y) => {
    return x + y;
}

test("adds a + b to the value.", () => {
    expect(add_num(3, 5)).toBe(8);
});