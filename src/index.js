function numberToBinary(n) {
	const originalN = n;
	let result = [];

	while (n > 0) {
		if (n % 2 === 1) {
			result.push("1");
		} else {
			result.push("0");
		}
		n = Math.floor(n / 2);
	}

	return "binary of number " + originalN + ": " + result.reverse().join("");
}

function binaryToNumber(b) {
	let result = 0;
	const reverseB = Array.from(b.toString()).reverse().join("");

	const binaryLen = reverseB.length;

	for (let i = 0; i < binaryLen; i++) {
		result += Number(reverseB[i]) * 2 ** i;
	}
	return result;
}

const binary = numberToBinary(12346);
const decimal = binaryToNumber(11000000111010);

const octal = (num) => "0o" + num.toString(8);

const hex = (num) => "0x" + num.toString(16);

console.log(octal(124));
console.log(hex(124));

// console.log(binary, decimal);
