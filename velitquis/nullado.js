let arr = [ "hello", "world", "this", "is", "a", "test" ];
let maxLen = Math.max(...arr.map(str => str.length));
let result = arr.map(str => str.padEnd(maxLen, ' ')).join('\n');
console.log(result);
