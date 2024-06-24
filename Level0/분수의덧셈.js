function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    // 분자
    let numer = numer1 * denom2 + numer2 * denom1
    // 분모
    let denom = denom1 * denom2
    // 최소 공약수 -> 유클리드 호제법
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b))

    answer[0] = numer / gcd(numer, denom)
    answer[1] = denom / gcd(numer, denom)

    return answer;
}

console.log(solution(1, 2, 3, 4))