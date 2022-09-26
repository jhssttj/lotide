//test/headTest.js
const assertEqual = require('../assertEqual');
const head = require('../head');

//Test Case
assertEqual(head([5,4,3]),2);
assertEqual(head(['Hi','Hey','Hello']),'Hi');
