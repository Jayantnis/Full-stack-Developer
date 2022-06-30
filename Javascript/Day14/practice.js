const comparision = [{
    name: 'Google',
    catergory: "product based",
    start: 1981,
    end: 2004,
    name: 'Amazon',
    catergory: "product based",
    start: 1992,
    end: 2008,
    name: 'Paytm',
    catergory: "Service based",
    start: 1989,
    end: 2019,
    name: 'coforge',
    catergory: "Service based",
    start: 1989,
    end: 2010,
    name: 'oracle',
    catergory: "product based",
    start: 1995,
    end: 2020,
}];

const age = [33, 12, 32, 20, 26, 5, 32, 43, 21, 434, 54, 21, 543, 45, 32];

for (let i = 0; i <= comparision.length; i++) {
    console.log(comparision[i]);
}

comparision.forEach((comparision, index) => (console.log(comparision.name)));

const ag = age.filter(function(age) {
    return age > 30;
});

console.log(ag);

const mapd = age.map(function(age) {
    return age > 30;

});
console.log(mapd);

const service = comparision.filter(comparision => comparision.catergory == "Service based");
console.log(service);

// call back es5
comparision.map(function(comparision, index) {
    console.log(comparision, index);
});

// sort high order function
const sorted = comparision.sort((c1, c2) => (c1.start > c2.start) ? 1 : -1);

console.log(sorted);