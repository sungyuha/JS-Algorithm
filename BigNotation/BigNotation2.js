function addUpTo(n) {
    return n * (n + 1)  / 2;
}

// 연산은 3번

//console.log(addUpTo(6))
// N을 갖고 N+1의 값을 곱하고 2로 나눔

var time1 = performance.now();
addUpTo(100000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) /1000} seconds.`);