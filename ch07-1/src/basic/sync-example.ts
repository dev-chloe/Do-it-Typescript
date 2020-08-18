import { readFileSync } from "fs";

// package.json 파일을 비동기 방식으로 읽는 예
const syncExample = () => {
  console.log("// read package.json - using synchronous api...");
  const buffer: Buffer = readFileSync("./src/basic/test.json");
  console.log("buffer.toString(): ", buffer.toString());
};

export default syncExample;
