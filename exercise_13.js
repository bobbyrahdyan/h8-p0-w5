function sorting(arrNumber) {
    for (let i = 0; i < arrNumber.length; i++) {
      for (let j = 0; j < arrNumber.length; j++) {
        if (arrNumber[i] > arrNumber[j]) {
          let temp = arrNumber[i]
          arrNumber[i] = arrNumber[j]
          arrNumber[j] = temp
        }
      }
    }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    let count = 0;
  
    for (let i = 0; i < arrNumber.length; i++) {
      if (arrNumber[0] === arrNumber[i]) {
        count++
      }
    }
  
    if (arrNumber.length === 0) {
      return "''"
    }
    return `angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${count} kali`
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''