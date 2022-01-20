//Pair Programming with @jabrilg & @wootang9
const wordSearch = (letters, word) => { 
    let wordLength = word.length;
    let gridLength = letters.length;
    for(let row of letters) {
        for (let i = 0; i < gridLength; i++) {
            let testString = row.slice(i, wordLength).join('');
            if (testString === word) {
                return true;
            }
        }
    }
    flippedArray = transpose(letters);
    for(let row of flippedArray) {
        for (let i = 0; i < gridLength; i++) {
            let testString = row.slice(i, wordLength).join('');
            if (testString === word) {
                return true;
            }
        }
    }
    return false;
}
const transpose = function(matrix) {
    let result = [];
    let rowLength = matrix[0].length;
    for (let i = 0; i < rowLength; i++) {
      result[i] = [];
      for (const row of matrix) {
        result[i].push(row[i]);
      }
    }
    return result;
  };
module.exports = wordSearch;
