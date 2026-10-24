// Problem 1: Staircase
// Time Complexity: O(n²)
// Space Complexity: O(n²)

const staircase = (n: number) => {
  let result = [];

  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const hashes = "#".repeat(i);
    result.push(spaces + hashes);
  }

  return result.join("\n");
};
console.log(staircase(4));

// Problem 2: Grading Students
// Time Complexity: O(n)
// Space Complexity: O(n)

const gradingStudents = (grades: number[]) => {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }

    const nextMultiple = Math.ceil(grade / 5) * 5;

    return nextMultiple - grade < 3 ? nextMultiple : grade;
  });
};

console.log(gradingStudents([73, 67, 38, 33]));

// Problem 3: Time Conversion
// Time Complexity: O(1)
// Space Complexity: O(1)

const timeConversion = (str: string) => {
  const period = str.slice(-2);
  let [hours, minutes, seconds] = str.slice(0, -2).split(":");

  if (period === "AM" && hours === "12") {
    hours = "00";
  } else if (period === "PM" && hours !== "12") {
    hours = String(Number(hours) + 12);
  }

  return `${hours}:${minutes}:${seconds}`;
};

console.log(timeConversion("07:05:45PM"));

// Problem 4: Repeat String
// Time Complexity: O(n × s.length)
// Space Complexity: O(n × s.length)

const repeatStr = (num: number, str: string) => {
  return str.repeat(num);
};

console.log(repeatStr(3, "Hello"));

// Problem 5: Reverse String
// Time Complexity: O(n)
// Space Complexity: O(n)

const solution = (str: string) => {
  return str.split("").reverse().join("");
};

console.log(solution("world"));

// Problem 6: Sum of Positive Numbers
// Time Complexity: O(n)
// Space Complexity: O(1)

const positiveSum = (arr: number[]) => {
  let sum = 0;

  for (const number of arr) {
    if (number > 0) {
      sum += number;
    }
  }

  return sum;
};

console.log(positiveSum([1, -4, 7, 12]));

// Problem 7: Summation
// Time Complexity: O(1)
// Space Complexity: O(1)

const summation = (num: number) => {
  return (num * (num + 1)) / 2;
};

console.log(summation(8));

// Problem 8: Boolean to String
// Time Complexity: O(1)
// Space Complexity: O(1)

const booleanToString = (b: boolean) => {
  return String(b);
};

console.log(booleanToString(true));
console.log(booleanToString(false));

// Problem 9: FizzBuzz
// Time Complexity: O(n)
// Space Complexity: O(n)

const fizzBuzz = (num: number) => {
  let result = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }

  return result;
};

console.log(fizzBuzz(15));

// Problem 10: Running Sum
// Time Complexity: O(n)
// Space Complexity: O(n)

const runningSum = (nums: number[]) => {
  let result = [];
  let sum = 0;

  for (const num of nums) {
    sum += num;
    result.push(sum);
  }

  return result;
};

console.log(runningSum([1, 2, 3, 4]));

// Problem 11: Maximum Wealth
// Time Complexity: O(m × n)
// Space Complexity: O(1)

const maximumWealth = (accounts: number[][]) => {
  let maxWealth = 0;

  for (const customer of accounts) {
    let wealth = 0;

    for (const money of customer) {
      wealth += money;
    }

    if (wealth > maxWealth) {
      maxWealth = wealth;
    }
  }

  return maxWealth;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ]),
);

// Problem 12: Remove Duplicates
// Time Complexity: O(n)
// Space Complexity: O(1) auxiliary

const removeDuplicates = (nums: number[]) => {
  if (nums.length === 0) {
    return 0;
  }

  let uniqueIndex = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueIndex] = nums[i];
      uniqueIndex++;
    }
  }

  return uniqueIndex;
};

const nums12 = [1, 1, 2, 2, 3];

const uniqueCount = removeDuplicates(nums12);
console.log("Unique count:", uniqueCount);
console.log("Unique elements:", nums12.slice(0, uniqueCount));

// Problem 13: Contains Duplicate
// Time Complexity: O(n) average
// Space Complexity: O(n)

const containsDuplicate = (nums: number[]) => {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));

// Problem 14: Move Zeroes
// Time Complexity: O(n)
// Space Complexity: O(1) auxiliary

const moveZeroes = (nums: number[]) => {
  let insertIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }

  while (insertIndex < nums.length) {
    nums[insertIndex] = 0;
    insertIndex++;
  }
};

const nums14 = [0, 1, 0, 3, 12];

moveZeroes(nums14);
console.log(nums14);

// Problem 15: Merge Sorted Array
// Time Complexity: O(m + n)
// Space Complexity: O(1) auxiliary

const merge = (nums1: number[], m: number, nums2: number[], n: number) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
  }
};

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];

merge(nums1, 3, nums2, 3);
console.log(nums1);

// Problem 16: Three Sum
// Time Complexity: O(n²) after sorting
// Space Complexity: O(log n) auxiliary for typical sort,
// excluding returned triplets

const threeSum = (nums: number[]) => {
  nums.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// Problem 17: Plus One
// Time Complexity: O(n)
// Space Complexity: O(1) auxiliary, excluding possible extra digit

const plusOne = (digits: number[]) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);

  return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([9, 9, 9]));

// Problem 18: Reverse String
// Time Complexity: O(n)
// Space Complexity: O(1) auxiliary

const reverseString = (s: string[]) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
};

const chars18 = ["h", "e", "l", "l", "o"];
reverseString(chars18);
console.log(chars18);

// Problem 19: Length of Last Word
// Time Complexity: O(n)
// Space Complexity: O(1)

const lengthOfLastWord = (s: string) => {
  let i = s.length - 1;
  let length = 0;

  while (i >= 0 && s[i] === " ") {
    i--;
  }

  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));

// Problem 20: Longest Common Prefix
// Time Complexity: O(n × m)
// Space Complexity: O(m)

const longestCommonPrefix = (strs: string[]) => {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
