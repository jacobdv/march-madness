// Initial chart parameters.
let xVariable = 'FG%';
let yVariable = 'W%';

// Data Stuff
d3.csv('data/cs.csv').then(data => {
    console.log(data);
})