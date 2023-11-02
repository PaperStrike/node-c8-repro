export function shouldPass() {
  return true;
}

export function shouldThrow() {
  throw new Error('shouldThrow');
}

export function shouldNotBeCovered() {
  return false;
}
