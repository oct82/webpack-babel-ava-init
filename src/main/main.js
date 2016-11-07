'use strict'

const fib = require('./lib/fib.js')

document.querySelector('pre').innerHTML = [...Array(10)].map((v, i) => fib(i))
