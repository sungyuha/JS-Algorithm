let names = ["Michael", "Melissa", "Andrea"]; // 첫 번째, 두 번째, 세 번째 아이템

//             "Michael"   "Melissa"   "Andrea"
//                   0           1          2    
// 배열 앞에 새로 추가하고 제거하는 것은 최대한 피해야 함
// 위처럼 헤도 되긴 하는데 끝에서 추가하고 제거하는 것만큼 효율적이지 않음. 그래서 앞에서 추가 제거는 하지 말자
// push와 pop하는 작업이 shift와 unshift 작업보다 빠름 / 비어있는 배열을 제거할 때를 제외하면

let values = [true, {}, [], 2,  "awesome"];
// element안에 index가 붙어있음
