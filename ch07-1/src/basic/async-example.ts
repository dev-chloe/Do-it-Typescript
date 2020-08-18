import { readFileSync, readFile } from "fs";

// package.json 파일을 동기 방식으로 읽는 예
const asyncExample = () => {
  readFile("./src/basic/test.json", (error: Error | null, buffer: Buffer) => {
    console.log("// read package.json - using asynchronous api...");
    console.log("buffer.toString(): ", buffer.toString());
  });
};

export default asyncExample;
