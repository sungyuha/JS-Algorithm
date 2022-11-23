function addUpTo(n) {
    let total = 0; // 시작에서 한 번 작동 함
    for (let i=1; i<=n; i++) { // i=1 이건 한 번 작동 함
        total += i;
    }
    return total;
}

//console.log(addUpTo(6))
// N숫자까지 모든 숫자들을 1부터 시작해서 차례대로 합산
// total 변수는 0으로 시작해서 루프가 끝나면 total 값이 돌아옴
// 6+5+4+3+2+1 = 21
// N에 따라서 늘어남, 

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// addupto 펑션
// performance.now라는 펑션을 사용
// addupto 펑션을 호출하기 전에 이 펑션을 변수에 저장
// addupto에 10억을 입력하고 호출
// 큰 숫자를 입력하고 호출 한 다음에 끝나면 performance.now를 다시 실행 -> 시간을 계속 합산 했을 것