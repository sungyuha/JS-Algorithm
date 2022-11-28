function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        // loop 5까지 가거나, n까지 반복 / n이 점점 커짐
        // n이 커질수록 연산 갯수가 n에 비레해서 늘어남
        console.log(i);
        // O(n)
    }
}
// 이 펑션을 빅오 O(n) 라고 단순화해서 말함

function logAtLeast5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        // n이 커지도 아무 영향을 주지 않음
        // 5보다 크면 무조건 MIN 더 작은 5를 선택함
        // 그래서 n이 1000이더라도 루프가 5번만 반복
        // n이 2면 루프가 2번만 반복
        // n이 커질수록 빅오는 상수라고 단순화할 수 있음
        console.log(i);
        // O(1)
    }
}