# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jhssttj/lotide`

**Require it:**

`const _ = require('@jhssttj/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Determine if two arrays in the input are equal and pass or fail depending on true or false results.
* `assertEqual`: function will determine if two inputs are equal and pass or fail depending on true or false results.
* `assertEqualObjects`: function will determine if two objects are equal and pass or fail depending on true or false results.
* `countLetters`: function will take a string and separate it into object with property as the letters in the string and its value to be the number of time the letter is used in the string.
* `countOnly`: function requires an array and an object. It will go through the first array and if there are elements that have the same name as the key names in the object and its value is true, it will return a new object with the property name being the element and the value being the number of time the element appeared in the array.
* `eqArrays`: function will compare two arrays and return true or false depending on if they are identical or not.
* `eqObjects`: function will compare two objects and return true or false depending on if they are identical or not.
* `findKey`: function is given an object and a condition as parameter. Function then returns the first key name in which its value matches the condition (truthy value).
* `findKeyByValue`: function is given an object and a value as parameter. Function then returns the first key name in which its value matches the parameter value.
* `flatten`: function is given an array (Potentially with nested arrays). It will return one array with all the nested arrays flattened to be in the same array as the main array.
* `head`: function is given an array and returns the first element in the array.
* `index`: a collection of functions in this lotide package used to export modules.
* `letterPositions`: function will take in a string and return an object with key name of unique letters used in the string with a value being an array of index which shows which position the letter was used in the string.
* `map`: function act as javascripts map function.
* `middle`: function that goes through an array and finds the value of the middle index. (If the array has even number of elements, it returns the two middle output. If the array has only 2 elements, it returns a blank array).
* `tail`: function that returns an array without the first element.
* `takeUntil`: function that will take in an array and a callback function. It will return the same array that cuts off at the element in which putting it to the call back function returns a truthy value.
* `without`: function will take a array and a value. It will return the array with any instance of the element removed if it equals the value.