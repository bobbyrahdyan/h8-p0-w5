function totalDigitRekursif(angka) {
    let count = 0;
    let str = angka.toString().split('');
    let arr = [];
    
    for (let i = 0; i < str.length; i++) {
      arr.push(Number(str[i]))
    }
    for (let i = 0; i < arr.length; i++) {
      count += arr[i]
    }
    return count
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5