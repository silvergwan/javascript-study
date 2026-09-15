// 함수 레벨 스코프(Function-level-scope)

// 함수에서 선언된 것은 블록을 무시하고도 함수 안에서 사용될 수 있다.
// 대표예시 var(JavaScript)
function func() {
  if (true) {
    var z = 10;
  }
  console.log(z); // 10 (접근 가능!)
}
// 이건 의도치 않게 버그를 유발할 수 있어서 위험할 수 있음


// 블록 레벨 스코프(Block-level-scope)

// 블록 안에서 선언된 것은 블록 안에서만 사용 될 수 있다
// 대표 예시: let, const (JavaScript), C, Java, Python 등 대부분의 언어
function block() {
  if (true) {
    let x = 10;
    const y = 20;
  }
  console.log(x); // ❌ 에러
  console.log(y); // ❌ 에러
}
// 요즘은 블록 레벨 스코프를 사용하는 게 더 안전하고 추천됨
