function countUpAndDown(n) {
    console.log("Going Up!");
    for (let i = 0; i < n; i ++) { // n이 늘어날 수록 루프안에 연산이 있음
        console.log(i); // for ~ (i) 까지 O(n)이 있고, n이 커질수록 루프가 실행하는 횟수가 늘어남
    }
    console.log("At the top! \nGoing down...");
    for (let j = n - 1; j >= 0; j--) { //n이 커질수록 루프가 실행하는 횟수가 늘어남
        console.log(j); // 위와 반대로 적용
    }
    console.log("Back down. Bye!");
}