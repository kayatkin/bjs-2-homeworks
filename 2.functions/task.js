function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let element of arr) {
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
    sum += element;
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}
// решение на разборе ДЗ =>
/* function getArrayParams(...arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let avg = Number((arr.reduce((accumulator, number) => accumulator + number, 0) / arr.length).toFixed(2));

    return { min: min, max: max, avg: avg };
}*/


function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  }

  return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement += 1;
    }
  }

  return countEvenElement !== 0 ? sumEvenElement / countEvenElement : 0;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let dataArr of arrOfArr) {
    let result = func(...dataArr);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}