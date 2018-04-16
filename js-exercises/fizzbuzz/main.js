printFizzBuzz(1, 100);

// Functions
function getFizzBuzz (num) {
  var answer = "";
  if (num % 3 === 0) {
    answer += "Fizz";
  }
  if (num % 5 === 0) {
    answer += "Buzz";
  }
  return answer || num;
}

function printFizzBuzz (start, end) {
  if (start > end) {
    console.error("Invalid range!");
  }
  for (var i = start; i <= end; i++) {
    console.log(getFizzBuzz(i));
  }
}
