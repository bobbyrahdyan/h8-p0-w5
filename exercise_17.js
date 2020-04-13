function kali(angka) {
    let str = angka.toString();
  
    if (str.length > 1) {
      return Number(str[0]) * kali(Number(str.slice(1)))
    } else {
      return angka
    }
  }
  
  
  function kaliTerusRekursif(angka) {
    let count = kali(angka)  
    
    if (count < 10) {
      return count
    }
    else {
      return kaliTerusRekursif(count)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8 
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0 
  console.log(kaliTerusRekursif(3333)); // 8