function getSumOfDigits(num) {
    var sum = 0;
    var numbers =  Math.floor(num).toString();
    for(var i = 0; i < numbers.length; i ++) {
      sum += parseInt(numbers[i]);
    }
    return(sum)
    }
