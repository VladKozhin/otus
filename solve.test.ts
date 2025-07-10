import {solve} from "./solve";

test("No roots if x^2+1=0", () => {
    expect(solve(1, 0, 1)).toStrictEqual([]);
});

test("Two roots for x^2-1=0", () => {
    expect(solve(1, 0, -1)).toStrictEqual([1, -1]);
});

test("One root for x^2+2x+1=0", () => {
    expect(solve(1, 2, 1)).toStrictEqual([-1]);
});

test("Exception if a=0", () => {
    expect(() => solve(0, 1, 2)).toThrow('Аргумент a не должен быть равен 0');
    expect(() => solve(Number.EPSILON-Number.EPSILON/2, 1, 2)).toThrow('Аргумент a не должен быть равен 0');
});

test("Exception if a, b or c is not number", () => {
    expect(() => solve(Number("a"), 1, 2)).toThrow('Аргумент должен быть числовым!');
});

test("Epsilon check", () => {
    expect(solve(1, 1e-8, 0)).toStrictEqual([-5e-9]);
});