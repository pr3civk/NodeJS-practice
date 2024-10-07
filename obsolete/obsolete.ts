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

interface Options {
  name: string;
  id: number | string;
  isGay?: boolean;
  isStraight?: boolean;
}

const options = [
  {
    name: "John",
    id: 1,
    isGay: false,
    isStraight: true,
  },
  {
    name: "Janusz",
    id: 2,
    isGay: true,
  },
  {
    name: "Franek",
    id: 3,
    isGay: true,
  },
];

// options.map((option: Options) =>
//   console.log(option.name, option.id, option.isGay, option.isStraight)
// );

// options.map((option: Options) => {
//   Object.entries(option).map((key, value) => {
//     console.log(key, value);
//   });
// });

// function fib(n: number, memo = {}) {
//   if (n in memo) return memo[n];
//   if (n <= 2) return 1;
//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//   return memo[n];
// }

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayTimesTwo = array.map((num) => {
  return num * 2;
});

arrayTimesTwo.find((num) => num === 4);

// arrayTimesTwo.forEach((num) => console.log(num));
// arrayTimesTwo.filter((num) => num % 4 === 0).forEach((num) => console.log(num));
// console.log(fib(50));

class TwojaStara {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  PrintName(this: any) {
    console.log(this.name);
  }

  PrintAge(this: any) {
    console.log(this.age);
  }

  PrintNameAndAge(this: any) {
    console.log(this.name, this.age);
  }
  AddAge(this: any, numeberToAdd: number) {
    this.age += numeberToAdd;
    console.log(this.age);
  }
}

const db = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Janusz",
    age: 40,
  },
  {
    name: "Franek",
    age: 50,
  },
  {
    name: "Marek",
    age: 60,
  },
  { name: "Kazimierz", age: 70 },
];

const db2 = [
  {
    name: "Adam",
    age: 30,
  },
  {
    name: "Grzegorz",
    age: 34,
  },
  {
    name: "Franek",
    age: 50,
  },
  {
    name: "Jacek",
    age: 60,
  },
  { name: "Q", age: 70 },
];

const db3 = [
  {
    name: "a",
    age: 30,
  },
  {
    name: "Dawid",
    age: 34,
  },
  {
    name: "Piotr",
    age: 50,
  },
  {
    name: "Kamil",
    age: 60,
  },
  { name: "Kacper", age: 70 },
];

//ternery operator

// !db.find((person)=>person.name === "Janusz") ? console.log("Janusz insde db") : (!db.find((person)=>person.name === "Marek") && db.filter((person)=>person.name === "Franek").length > 0) ? console.log("Franek insde db") : console.log("Marek not insde db");

// db.filter((person) => person.age > 30).map((person) =>
//   console.log(person.name, person.age)
// );

// const dbFull = [...db, ...db2, ...db3];

// dbFull.map((person) => {
//   const { name, age } = person;
//   console.log(name, age);
// });

// const myString: string = "janusz";

// console.log(myString.toUpperCase());

// const toCapitalize = (str: string) => {
//   const firstLetter = str.charAt(0).toUpperCase();
//   return firstLetter + str.slice(1, str.length);
// };

// console.log(toCapitalize(myString));

// const myRandomArray = Array.from({ length: 10 }, () =>
//   Math.floor(Math.random() * 100)
// );

// // console.log(myRandomArray);
// console.log(myRandomArray.sort((a, b) => a - b));

// let mySortedRandomArray = myRandomArray.sort((a, b) => a - b);

// let a: number = 3;

// a = a + 1;
// console.log(a);

//Node Api React odpal NExt solidity dAppke
//web2 appka z reacta i node api
