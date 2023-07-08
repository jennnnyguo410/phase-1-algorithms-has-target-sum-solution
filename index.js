function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complemnt = target - array[i]
    for (let j = 0; j < array.length; j++) {
      if (array[j] === complemnt) return true
    }
  }
  return false
}
// O(3n + 2)
function hasTargetSu2(array, target) {
  const seeNumbers = {}
  for (const number of array) {
    const complemnt = target - number
    if (seeNumbers[complemnt]) return true
    seeNumbers[number] = true
  }
  return false
}

// O(n)
function hasTargetSu3(array, target) {
  const seenNumbers = new Set()
  for (const number of array) {
    const complement = target - number
    if (seenNumbers.has(complement)) return true
    seenNumbers.add(number)
  }
  return false
}


/* 
  function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
   *n step depends on the legthn of array*
    const complemnt = target - array[i]
    for (let j = 0; j < array.length; j++) {
      *n * n step *
      if (array[j] === complemnt) return true
    }
  }
*1 step*
  return false
}
*/


/*

*/


/* 
 遍历数组中的数字
 对于当前数字，找出一个与目标数字相加的补数
 遍历数组中剩下的数字
 检查剩下的数字中是否有一个补数
 如果是，返回true
 如果到达数组末端，返回false
*/

/*
  Add written explanation of your solution here
  创建一个对象来记录我们所看到的所有数字
遍历数字阵列
  对于当前的数字，找出一个与目标数字相加的补数
  (例如：如果我们的数字是2，而目标是5，那么补数就是3)
  检查我们对象中的任何一个键是否是当前数字的补数
    如果是，返回true
  将当前的数字保存为我们对象的键，这样我们以后就可以用其他数字来检查它了
如果我们到达数组的末端，返回false

函数的目的是判断数组中是否有两个元素的和等于目标数 target。

函数首先创建一个名为 seenNumbers 的空对象，用于存储已经遍历过的数组元素。

然后，函数通过一个 for...of 循环遍历数组 array 中的每一个元素 number。

对于每一个 number，函数首先计算 target 减去 number 的结果，得到一个 complement。这个 complement 就是为了使 number 与之相加能够等于 target 所需的数。

接下来，函数检查 complement 是否已经存在于 seenNumbers 对象中。如果存在，说明在数组中已经有一个元素与当前元素 number 的和等于 target，于是函数返回 true。

如果 complement 没有在 seenNumbers 中，函数将 number 添加到 seenNumbers 对象中，值为 true，表示这个 number 已经被看过。

如果函数遍历完整个数组都没有找到两个数的和等于 target，则返回 false。
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
