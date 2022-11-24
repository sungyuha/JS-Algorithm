function addUpTo(n) {
    return n * (n + 1)  / 2;
}

// 연산은 3번

//console.log(addUpTo(6))
// N을 갖고 N+1의 값을 곱하고 2로 나눔
// 이 표기법의 의미는 n값이 커질수록, 이 경우에는 아무 변화가 없음. 실행 시간은 변하지 않음

var time1 = performance.now();
addUpTo(100000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) /1000} seconds.`);