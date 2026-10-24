// Problem 1: Staircase
// Time Complexity: O(n²)
// Space Complexity: O(n²)

var staircase = (n: number) => {
  var result = [];

  for (var i = 1; i <= n; i++) {
    var spaces = " ".repeat(n - i);
    var hashes = "#".repeat(i);
    result.push(spaces + hashes);
  }

  return result.join("\n");
};

console.log(staircase(4));

// Problem 2: Grading Students
// Time Complexity: O(n)
// Space Complexity: O(n)

var gradingStudents = (grades: number[]) => {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }

    var nextMultiple = Math.ceil(grade / 5) * 5;

    return nextMultiple - grade < 3 ? nextMultiple : grade;
  });
};

console.log(gradingStudents([73, 67, 38, 33]));

// Problem 3: Time Conversion
// Time Complexity: O(1)
// Space Complexity: O(1)

var timeConversion = (str: string) => {
  var period = str.slice(-2);
  var [hours, minutes, seconds] = str.slice(0, -2).split(":");

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

var repeatStr = (num: number, str: string) => {
  return str.repeat(num);
};

console.log(repeatStr(3, " Hello"));

// Problem 5: Reverse String
// Time Complexity: O(n)
// Space Complexity: O(n)

var solution = (str: string) => {
  return str.split("").reverse().join("");
};

console.log(solution("world"));

// Problem 6: Sum of Positive Numbers
// Time Complexity: O(n)
// Space Complexity: O(1)

var positiveSum = (arr: number[]) => {
  var sum = 0;

  for (var number of arr) {
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

var summation = (num: number) => {
  return (num * (num + 1)) / 2;
};

console.log(summation(8));

// Problem 8: Boolean to String
// Time Complexity: O(1)
// Space Complexity: O(1)

var booleanToString = (b: boolean) => {
  return String(b);
};

console.log(booleanToString(true));
console.log(booleanToString(false));

// Problem 9: FizzBuzz
// Time Complexity: O(n)
// Space Complexity: O(n)

var fizzBuzz = (num: number) => {
  var result = [];

  for (var i = 1; i <= num; i++) {
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

var runningSum = (nums: number[]) => {
  var result = [];
  var sum = 0;

  for (var num of nums) {
    sum += num;
    result.push(sum);
  }

  return result;
};

console.log(runningSum([1, 2, 3, 4]));

// Problem 11: Maximum Wealth
// Time Complexity: O(m × n)
// Space Complexity: O(1)

var maximumWealth = (accounts: number[][]) => {
  var maxWealth = 0;

  for (var customer of accounts) {
    var wealth = 0;

    for (var money of customer) {
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

var removeDuplicates = (nums: number[]) => {
  if (nums.length === 0) {
    return 0;
  }

  var uniqueIndex = 1;

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueIndex] = nums[i];
      uniqueIndex++;
    }
  }

  return uniqueIndex;
};

var nums12 = [1, 1, 2, 2, 3];

var uniqueCount = removeDuplicates(nums12);

console.log("Unique count:", uniqueCount);
console.log("Unique elements:", nums12.slice(0, uniqueCount));

// Problem 13: Contains Duplicate
// Time Complexity: O(n) average
// Space Complexity: O(n)

var containsDuplicate = (nums: number[]) => {
  var seen = new Set<number>();

  for (var num of nums) {
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

var moveZeroes = (nums: number[]) => {
  var insertIndex = 0;

  for (var i = 0; i < nums.length; i++) {
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

var nums14 = [0, 1, 0, 3, 12];

moveZeroes(nums14);
console.log(nums14);

// Problem 15: Merge Sorted Array
// Time Complexity: O(m + n)
// Space Complexity: O(1) auxiliary

var merge = (nums1: number[], m: number, nums2: number[], n: number) => {
  var i = m - 1;
  var j = n - 1;
  var k = m + n - 1;

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

var nums1 = [1, 2, 3, 0, 0, 0];
var nums2 = [2, 5, 6];

merge(nums1, 3, nums2, 3);
console.log(nums1);

// Problem 16: Three Sum
// Time Complexity: O(n²) after sorting
// Space Complexity: O(log n) auxiliary for typical sort,
// excluding returned triplets

var threeSum = (nums: number[]) => {
  nums.sort((a, b) => a - b);

  var result: number[][] = [];

  for (var i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    var left = i + 1;
    var right = nums.length - 1;

    while (left < right) {
      var sum = nums[i] + nums[left] + nums[right];

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

var plusOne = (digits: number[]) => {
  for (var i = digits.length - 1; i >= 0; i--) {
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

var reverseString = (s: string[]) => {
  var left = 0;
  var right = s.length - 1;

  while (left < right) {
    var temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
};

var chars18 = ["h", "e", "l", "l", "o"];

reverseString(chars18);
console.log(chars18);

// Problem 19: Length of Last Word
// Time Complexity: O(n)
// Space Complexity: O(1)

var lengthOfLastWord = (str: string) => {
  var i = str.length - 1;
  var length = 0;

  while (i >= 0 && str[i] === " ") {
    i--;
  }

  while (i >= 0 && str[i] !== " ") {
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

var longestCommonPrefix = (strs: string[]) => {
  if (strs.length === 0) {
    return "";
  }

  var prefix = strs[0];

  for (var i = 1; i < strs.length; i++) {
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
