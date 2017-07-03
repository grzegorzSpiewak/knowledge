import _ from 'lodash';

const firstArray = [
  { name: 'John', age: '21', active: true },
  { name: 'Mary', age: '13', active: false },
]

const secondArray = [
  { name: 'Tom', age: '30', active: true },
  { name: 'Mary', age: '25', active: false },
]

const thirdArray = ['cat', 'dog', 'cow', 'mose']

const firstObject = {
  person: [
    { name: 'John', age: '21', active: true },
    { name: 'Mary', age: '13', active: false },
  ]
}

const secondObject = {
  person: [
    { name: 'Tom', age: '30', active: true },
    { name: 'Mary', age: '25', active: false },
  ]
}

//** Example of array methods **//

// Chunk an array of elements split into groups the length of size
// console.log(_.chunk(['a', 'b', 'c', 'd'], 2))

// Concat crates new array from passed array and new values
// const concat = _.concat( firstArray, {name: "Adam", age: "28", active: true })
// console.log(concat)

// Difference compares array with provided values  and crates new one with differences
// const difference = _.difference(firstArray, {name: "Adam", age: "28, active: true"})
// console.log(difference)

// Drop Creates a slice of array with n elements dropped from the beginning
// const drop = _.drop(firstArray,  1)
// console.log(drop)

// DropRight Creates a slice of array with n elements dropped from the end
// const dropRight = _.dropRight(firstArray, 1)
// console.log(DropRight)

// DropRightWhile Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey.
// const dropRightWhile = _.dropRightWhile(firstArray, ['active', false])
// console.log(DropRightWhile)

// FindIndex Return index of searched element
// const findIndex = _.findIndex(firstArray, ['active', false])
// console.log(findIndex)

// Join Converts all elements in array into a string separated by separator.
// const join = _.join(firstArray, '~')
// console.log(join)

// Pull removes values for array
// const pull = _.pull(thirdArray, 'dog', 'cow')
// console.log(pull)

// Slice Creates a slice of array from start up to, but not including, end
// const slice = _.slice(thirdArray, 1)
// console.log(slice)

// Take Creates a slice of array with n elements taken from the beginning
// const take = _.take(thirdArray, 3)
// console.log(take)

// TakeWhile Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey.
// const TakeWhile = _.takeWhile(firstArray, 'active')
// console.log(TakeWhile)

//** Example of Collection Methodts **//

// Every Checks if predicate returns truthy for all elements of collection
// const every = _.every(firstArray, ['active', false])
// console.log(every)

// Filter Iterates over elements of collection, returning an array of all elements predicate returns truthy for.
// const filter = _.filter(firstArray, ['active', true])
// console.log(filter)

// Find Iterates over elements of collection, returning the first element predicate returns truthy for.
// const find = _.find(secondArray, ['active', false])
// console.log(find)

// SortBy Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee.
// const sortBy = _.sortBy(firstArray, ['age'])
// console.log(sortBy)

//** Object Methodts **//

//
