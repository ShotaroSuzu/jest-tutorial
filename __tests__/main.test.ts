import {
  sum,
  objectEqual,
  getMyLunchCollection,
  compileAndroidCode,
} from '@/main';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object equal', () => {
  const data = objectEqual('one', 'two');
  expect(data).toEqual({ one: 'one', two: 'two' });
});

test('my munch contents', () => {
  const myLunches = getMyLunchCollection();
  expect(myLunches).toContain('ramen');
  expect(myLunches).not.toContain('pasta');
  expect(new Set(myLunches)).not.toContain('pasta');
});

test('compiling android goes as expected', () => {
  // 例外をthrowする関数はラッピング関数内で呼び出される必要がある。
  // そうでないとアサーションが失敗する
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // エラーメッセージもアサートできる
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  // 正規表現も使える
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
