const trans = require("./transpose");
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(""))
    for (l of horizontalJoin) {
        if (l.includes(word)) {return true}
    }
    let newletters = trans(letters);
        console.log(newLetters);

    let verticalJoin = newLetters.map(ls => ls.join(""));
        console.log(verticalJoin);

    for (i of verticalJoin) {
        if (i.includes(word))
        {return true}
    }
    return false
}
module.exports = wordSearch