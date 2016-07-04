import test from 'tape';
import primerFactor from '../build/index.js';

test('test results', (t) => {
  t.same(primerFactor(18), [2, 3, 3],
    'it should be [2, 3, 3]');

  t.same(primerFactor(18124324557), [3, 6041441519],
      'it should be [3, 6041441519]');

  t.same(primerFactor(240), [2, 2, 2, 2, 3, 5],
    'it should be [2, 2, 2, 2, 3, 5]');

  t.end();
});
