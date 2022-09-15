function duplikate(text) {
    return text
        .toLowerCase()
        .split("")
        .filter(function (val, i, arr) {
            return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
        });
}

console.log(duplikate("abcde")); // → 0
console.log(duplikate("aabbcde")); // → 2: a, b
console.log(duplikate("aabBcde")); // → 2: a, (b,B)
console.log(duplikate("aA11")); // → 2: a, 1
console.log(duplikate("aabbccdd")); // → 4: a, b, c, d
console.log(duplikate("aabbb")); // → 2: a, b
