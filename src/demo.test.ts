import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { shouldPass, shouldThrow } from './demo';

describe('demo', () => {
  it('should pass', () => {
    assert.doesNotThrow(shouldPass);
  });

  it('should throw', () => {
    assert.throws(shouldThrow);
  });
});
