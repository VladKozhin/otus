export function solve(a:number, b:number, c:number):number[]{
    if(a === 0 || (a < Number.EPSILON && a > -Number.EPSILON)){
        throw 'Аргумент a не должен быть равен 0'
    }
    if(isNaN(a) || isNaN(b) || isNaN(c)){
        throw 'Аргумент должен быть числовым!'
    }
    const D = b * b - 4 * a * c;
    const epsilon = Number.EPSILON;

    if (D > epsilon) {
        const sqrtD = Math.sqrt(D);
        return [
            (-b + sqrtD) / (2 * a),
            (-b - sqrtD) / (2 * a)
        ];
    } else if (Math.abs(D) <= epsilon) {
        return [-b / (2 * a)];
    } else {
        return [];
    }
}

console.log(solve(1, Number.EPSILON, Number.EPSILON))