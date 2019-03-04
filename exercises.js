//Exercise 1
function palindrome(word) {
  let lowerWord = word.toLowerCase()
  let reversedWord = ""
  for(let index = lowerWord.length-1; index >=0; index--) {
    reversedWord += lowerWord[index]
  }
  if (lowerWord === reversedWord) {
    console.log('Your Word is a Palindrome')
    } else {
    console.log('Your Word is not a Palindrome')
    }
}
palindrome('Dad')
palindrome('Cat')

//Exercise 2
let names = ['John','Mary', 'Alex', 'Steve', 'Mary', 'John']

function removeDuplicates(names) {
  let listNames = {}
  let updateNames = []
  for (let index = 0; index < names.length; index++) {
  if (!(names[index] in listNames)) {
    updateNames.push(names[index])
    listNames[names[index]] = true
    }
  }
  return updateNames
}
let result = removeDuplicates(names)
console.log(result)

//Exercise 3
let numbers = [1, 2, 3, 4, 5]

function findNumber(number) {
  let foundNumber = false
  for (let index = 0; index < numbers.length; index++) {
  if (number === numbers[index]) {
    foundNumber = true
    }
  }
  console.log(foundNumber)
}
findNumber(3)

//Exercise 4
let numberList = [1, 3, 5, 6, 7, 9]

function largestNumber(numberList) {
  let max = 0
  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] > max) {
      max = numberList[index]
    }
  }
  console.log(max)
}
largestNumber(numberList)

//Exercise 5
let moreNumbers = [2, 4, 6, 8, 10]

function smallestNumber(moreNumbers) {
  let min = moreNumbers[0]
  for (let index = 0; index < moreNumbers.length; index++) {
    if (moreNumbers[index] < min) {
      min = moreNumbers[index]
    }
  }
  console.log(min)
}
smallestNumber(moreNumbers)

//Exercise 6
function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0 ) {
    console.log('FuzzBuzz')
  }
  else if (number % 3 === 0) {
    console.log('Fizz')
  }
  else if (number % 5 === 0) {
    console.log('Buzz')
  }
}
fizzBuzz(15)

//Exercise 7
function evenOdd(number) {
  if (number % 2 === 0) {
    console.log('The number is even.')
  }
  else if (number % 1 === 0) {
    console.log('The number is odd.')
  }
}
evenOdd(5)
