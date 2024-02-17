function solution(numbers, left, right) {
  result = new Array(numbers.length).fill(false);
  for (let i = 0; i < numbers.length; i++) {
    for (let x = left; x <= right; x++) {
      if (numbers[i] === (i + 1) * x) {
        result[i] = true;
      }
    }
  }

  return result;
}

function solution(a) {
  let b = [];

  for (let i = 0, j = a.length - 1; i <= j; i++, j--) {
    if (i !== j) {
      b.push(a[i]);
      b.push(a[j]);
    } else {
      b.push(a[i]);
    }
  }

  let isSorted = true;
  for (let i = 0; i < b.length; i++) {
    if (b[i] >= b[i + 1]) {
      isSorted = false;
    }
  }

  return isSorted;
}

function solution(a) {
  let count = {};
  // count freuqency of elements in 'a'
  for (const num of a) {
    if (count[num]) {
      count[num] += 1;
    } else {
      count[num] = 1;
    }
    // as soon as count[num] is above 2 return empty array
    if (count[num] > 2) {
      return [];
    }
  }

  let arr1 = [];
  let arr2 = [];

  let startingArr = [...a];

  for (const key in count) {
    if (count[key] === 2) {
      arr1.push(parseInt(key));
      arr2.push(parseInt(key));
      startingArr = startingArr.filter((num) => num !== parseInt(key));
    }
  }

  for (let i = 0; i < startingArr.length; i++) {
    if (!arr1.includes(startingArr[i]) && arr1.length < a.length / 2) {
      arr1.push(startingArr[i]);
    } else {
      arr2.push(startingArr[i]);
    }
  }

  return [arr1, arr2];
}

function solution(cntProducts, quantities, costs, meals) {
  // find shop with min costs
  const shopWithMinCost = (costs, productNum) => {
    let minCost = costs[0][productNum];
    let minCostShop = 0;
    for (let i = 1; i < costs.length; i++) {
      if (costs[i][productNum] < minCost) {
        minCost = costs[i][productNum];
        minCostShop = i;
      }
    }
    return minCostShop;
  };

  console.log(costs);

  // variable to store meal costs
  let mealCost = new Array(meals.length);

  for (let i = 0; i < meals.length; i++) {
    for (let j = 0; j < meals[0].length; j++) {
      let minCostShop = shopWithMinCost(costs, j);
      console.log(
        `For meal ${i} and product ${j} minCostShop is ${minCostShop}`
      );
    }
  }
}

// 2U sample test

{
  const buttons = document.getElementsByTagName("button");
  const boxes = document.getElementsByClassName("box");

  console.log(boxes);
  const arr = Array.prototype.map.call(boxes, (box) => box.innerHTML);

  console.log(arr);
  buttons[0].onclick = function () {
    arr.push(arr.shift());
    Array.prototype.forEach.call(
      boxes,
      (box, ind) => (box.innerHTML = arr[ind])
    );
  };

  buttons[1].onclick = function () {
    arr.unshift(arr.pop());
    Array.prototype.forEach.call(
      boxes,
      (box, ind) => (box.innerHTML = arr[ind])
    );
  };
}
