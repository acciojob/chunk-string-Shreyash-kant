function stringChop(str, size) {
  // your code here
  if (str===null) return [];
  if (str.length < size) return [str];
  const chunks = [];
  let count = 0;
  let s = "";
  let i;
  for (i = 0; i < str.length; ++i) {
    s += str[i];
    ++count;
    if (count === size) {
      chunks.push(s);
      s = "";
      count = 0;
    } 
  }
  if (count !== 0) chunks.push(s);
  return chunks;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
