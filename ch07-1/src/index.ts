import syncExample from "./basic/sync-example";
import asyncExample from "./basic/async-example";
import promiseExample from "./basic/promise-example";

// package.json 파일을..
syncExample(); // 동기 방식으로 읽는 예
asyncExample(); // 비동기 방식으로 읽는 예
promiseExample(); // Promise async/await 방식으로 읽는 예

// [출력 결과]
// read package.json - using synchronous api...
// buffer.toString(): {
//   "hello": "world"
// }
//
// read package.json - using asynchronous api...
// buffer.toString(): {
//   "hello": "world"
// }
//
// read package.json - using Promise and async/await...
// content: {
//   "hello": "world"
// }
//
