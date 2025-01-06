let uninitialized;
console.log(uninitialized);
// 결과값 < undefined >
//변수 선언은 했으나 초기화는 하지않았습니다.

const apple = "사과";
apple = "바나나";
// TypeError: Assignment to constant variable
//const로 선언한 변수는 상수이기에 재할당이 불가능합니다.

let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]);
// 결과값 < 19가 출력됩니다. lotto 배열의 3에 해당하는 인덱스는 19입니다 >

let mySchedule = "";
console.log(mySchedule || false); // <false, 빈 문자열의 boolean 값은 false이므로 논리연산 결과도 false입니다  >
console.log(!!mySchedule); // < false >
//false에 해당하는 값을 이중 부정했으므로 false->true->false입니다다
