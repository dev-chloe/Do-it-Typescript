import { readFileSync, readFile } from "fs";
import { rejects } from "assert";
import { resolve } from "path";

const readFilePromise = (fileName: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    readFile(fileName, (error: Error | null, buffer: Buffer) => {
      if (error) {
        reject(error);
      } else {
        resolve(buffer.toString());
      }
    });
  });

const promiseExample = async () => {
  const content = await readFilePromise("./src/basic/test.json");
  console.log("// read package.json - using Promise and async/await...");
  console.log("content: ", content);
};

export default promiseExample;
