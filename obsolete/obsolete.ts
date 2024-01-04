// // import * as options from "./utils/options";
// // import fs from "node:fs";
// // import http from "node:http";
// // const note = process.argv[2];
// // const newNote = {
// //   content: note,
// //   date: new Date().toLocaleDateString("en-GB"),
// // };
// // new Array(1000 * 20).fill(0).map((_, i) => {
// //   console.log(i + 1);
// // });

// const wait = (time) => {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         res();
//       }, time);
//     });
//   };
  
//   const run = async () => {
//     await wait(2000);
//     console.log(3000);
//     wait(3000);
//   };
  
//   async function foo(name) {
//     await console.log(name, "start");
//     console.log(name, "middle");
//     await console.log(name, "second middle");
//     console.log(name, "end");
//   }
  

// import fs from "fs/promises";
// import { fileURLToPath } from "url";

// const readpJSON = async (path) => {
//   const pJSONPath = fileURLToPath(new URL(`./${path}`, import.meta.url));
//   console.log(JSON.parse(await fs.readFile(pJSONPath, "utf-8")));
// };


// const writeFile = async () => {
//   const newFile = fileURLToPath(new URL("./demo.json", import.meta.url));
//   await fs.writeFile(
//     newFile,
//     `{
//     "data": [
//       {
//         "Data": "data",
//         "ID": 1
//       },
//       {
//         "Data": "test",
//         "ID": 2
//       },
//       {
//         "Data": "smth",
//         "ID": 3
//       }
//     ]
//   }
//   `
//   );
// };

// writeFile();
// readpJSON("demo.json");
