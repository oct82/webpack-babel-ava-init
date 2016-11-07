'use strict'

import test from 'ava'
import fib from '../../main/lib/fib.js'

const countArray = [...Array(10)].map((v, i) => i)

test('fib', t => {
  t.deepEqual(countArray.map(fib), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
})
