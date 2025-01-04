function stringChop(str, size) {
  // your code here
   // your code here
  if (str===null) return [];
  const chunks = [];
  let i = 0;
  while (i < str.length) {
    chunks.push(str.slice(i, i + size));
    i = i + size;
  }
  return chunks;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
