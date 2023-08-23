function solution(a, b, n) {
  var answer = 0;

  while (n >= a) {
    answer += Math.floor(n / a) * b;
    // 20 / 2 * 1 = 10
    // 10 / 2 * 1 = 5
    // 5 / 2 * 1 = 2 | 5 % 2 = 1 (2 + 1 = 3)
    // 3 / 2 * 1 = 1 | 3 % 2 = 1 (1 + 1 = 2)
    // 2 / 2 * 1 = 1
    // 1(n)은 2(a)보다 작기 때문에 반복문 종료

    // 20 / 3 * 1 = 6 | 20 % 3 = 2 (6 + 2 = 8)
    // 8 / 3 * 1 = 2 | 8 % 3 = 2 (2 + 2 = 4)
    // 4 / 3 * 1 = 1 | 4 % 3 = 1 (1 + 1 = 2)
    // 2(n)는 3(a)보다 작기 때문에 반복문 종료

    // 20 / 4 * 3 = 15
    // 15 / 4 * 3 = 9 | 15 % 4 = 3 (9 + 3 = 12)
    // 12 / 4 * 3 = 9
    // 9 / 4 * 3 = 6 | 9 % 4 = 1 (6 + 1 = 7)
    // 7 / 4 * 3 = 3 | 7 % 4 = 3 (3 + 3 = 6)
    // 6 / 4 * 3 = 3 | 6 % 4 = 2 (3 + 2 = 5)
    // 5 / 4 * 3 = 3 | 5 % 4 = 1 (3 + 1 = 4)
    // 4 / 4 * 3 = 3
    // 3(n)은 4(a)보다 작기 때문에 반복문 종료
    n = Math.floor(n / a) * b + (n % a);
  }

  return answer;
}

solution(2, 1, 20);
solution(3, 1, 20);
solution(4, 3, 20);
