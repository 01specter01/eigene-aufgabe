let arr = [
    { title: "Instructor", first: "Elie", last: "Schoppik" },
    { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
    { title: "Instructor", first: "Matt", last: "Lane" },
    {
        title: "Instructor",
        first: "Colt",
        last: "Steele",
        isCatOwner: true,
    },
];
function hasCertainValue(arr, key, value) {
    return arr.every((element) => {
        return element[key] === value;
    });
}
console.log(hasCertainValue(arr, "title", "Instructor"));
console.log(hasCertainValue(arr, "first", "Elie"));
