const fs = require('fs');

// arr 中放入地图点数组 arr[[],[]]
const arr = []

let reArr = []

reArr = arr.reverse();
fs.writeFileSync('./result.json', JSON.stringify(reArr));