function changeVocals (str) {
    let temp = '';
    let vocal = 'aAiIuUeEoO';
    let konsonan = 'bBjJvVfFpP';
  
    for (let i = 0; i < str.length; i++) {
      if (vocal.indexOf(str[i]) > -1) {
        temp += konsonan[vocal.indexOf(str[i])]
      } else if (vocal.indexOf(str[i]) < 0) {
          temp += str[i]
        }
    }
    return temp
  }
  
  function reverseWord (str) {
    let result = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i]
    }
    return result
  }
  
  function setLowerUpperCase (str) {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase()) {
        result += str[i].toUpperCase()
      } else if (str[i] === str[i].toUpperCase()) {
        result += str[i].toLowerCase()
      }
    }
    return result
  }
  
  function removeSpaces (str) {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        result += str[i]
      }
    }
    return result
  }
  
  function passwordGenerator(name) {
    if (name.length < 5) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
  
    let recChangeVocals = changeVocals(name);
    let recReverseWord = reverseWord(recChangeVocals);
    let recSetLowerUpperCase = setLowerUpperCase(recReverseWord);
    let recRemoveSpaces = removeSpaces(recSetLowerUpperCase);
  
    return recRemoveSpaces
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'