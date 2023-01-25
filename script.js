function letterCombinations(digit) {
	   if (!digits) {
        return [];
    }
    let map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };
    let res = [""];
    for (let i = 0; i < digits.length; i++) {
        let tmp = [];
        for (let j = 0; j < res.length; j++) {
            for (let k = 0; k < map[digits[i]].length; k++) {
                tmp.push(res[j] + map[digits[i]][k]);
            }
        }
        res = tmp;
    }
    return res.sort();
}
 
module.exports = letterCombinations;