/**
 * Created by reedvilanueva on 9/18/16.
 *
 * Testing eslint confinguration
 */

/*
* Write four functions that return the sum of the numbers in a given list
* using a for-loop, a while-loop, recursion, and underscore. Call them sumFor,
* sumWhile, sumRecursion, and sumTheSimpleWay.
* */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumFor(list) {
  let sum = 0;
  for (const item of list) {
    sum += item;
  }

  return sum;
}
console.log(sumFor(arr));

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i += 1;
  }

  return sum;
}
console.log(sumWhile(arr));

function sumRecursion(list, i = 0) {
  if (i < list.length) {
    return list[i] + sumRecursion(list, i + 1);
  }
  return 0;
}
console.log(sumRecursion(arr));

function sumTheSimpleWay(list) {
  return _.reduce(list, (memo, listItem) => (memo + listItem), 0);
}
console.log(sumTheSimpleWay(arr));
