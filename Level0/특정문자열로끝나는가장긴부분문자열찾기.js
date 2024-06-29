function solution(myString, pat) {
    lastIndex = myString.lastIndexOf(pat)
    return myString.substring(0, lastIndex + pat.length)
}

console.log(solution("AbCdEFG", "dE"))