## Promise의 상태

Promise를 사용하면 비동기 작업의 성공과 실패를 하나의 객체로 관리할 수 있습니다. 이를 이해하기 위해 먼저 Promise가 가지는 상태를 알아보겠습니다.

#### Promise는 크게 3가지 상태를 가집니다.

Pending
Pending은 아직 성공이나 실패가 결정되지 않은 대기 상태입니다.

- 예를 들어 서버에 데이터를 요청했지만 아직 응답이 오지 않았다면 Pending 상태라고 할 수 있습니다.

Fulfilled
Fulfilled는 작업이 성공적으로 완료된 상태입니다.

- 작업이 정상적으로 끝났으며, 결과값을 사용할 수 있는 상태입니다.

Rejected
Rejected는 작업이 실패한 상태입니다.

- 네트워크 오류가 발생하는 등 작업을 정상적으로 완료하지 못했을 때의 상태입니다.

## Promise 사용법

정리하면 Promise는 다음과 같이 만들 수 있습니다.

```js
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("작업 성공");
  } else {
    reject("작업 실패");
  }
});
```

new Promise()에 전달하는 함수는 resolve와 reject라는 두 함수를 매개변수로 받습니다.

resolve()에는 작업의 성공 결과를 전달하고, reject()에는 실패 이유를 전달합니다.

참고로 new Promise()에 전달한 함수 자체는 즉시 실행됩니다. 이부분을 executor함수라고 합니다.

위 예시도 기다리는 작업이 없기 때문에 바로 성공 상태가 됩니다.

### Promise의 결과는 then(), catch(), finally()를 사용하여 처리할 수 있습니다.

then()
then()에는 Promise가 성공했을 때 실행할 콜백 함수를 전달할 수 있습니다.

즉, Promise의 상태가 Fulfilled가 되면 해당 콜백이 실행됩니다.

```js
promise.then((result) => {
  console.log(result);
});
```

코드에서 resolve("작업 성공")을 실행했다면 result에는 "작업 성공"이라는 값이 들어옵니다.

catch()
catch()에는 Promise가 실패했을 때 실행할 콜백 함수를 전달합니다.

즉, Promise의 상태가 Rejected가 되면 해당 콜백이 실행됩니다.

```js
promise.catch((error) => {
  console.log(error);
});
```

만약 Promise에서

reject("작업 실패");
가 실행되었다면 "작업 실패"라는 값이 error로 전달됩니다.

finally()
finally()에는 Promise의 성공 여부와 상관없이, 처리가 끝난 뒤 실행할 콜백 함수를 전달합니다.

```js
promise.finally(() => {
  console.log("작업 종료");
});
```

그래서 로딩 화면을 종료하거나 작업이 끝난 뒤 공통적으로 실행해야 하는 코드가 있을 때 사용할 수 있습니다.

전체적으로 사용하면 다음과 같습니다.

```js
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("작업 종료");
  });
```

위 코드에서는 성공하면 then()의 콜백이 실행되고, 실패하거나 앞의 then() 콜백에서 오류가 발생하면 catch()의 콜백이 실행됩니다.

그다음 finally()의 콜백에서 공통 마무리 작업을 실행합니다.
