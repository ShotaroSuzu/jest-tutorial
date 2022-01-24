import { getRamenAfterOneSecond } from '@/async';

test('Ramen Creator', () => {
  // 非同期処理の場合は待たずに後続が実行されてしまうので、このテストは失敗する
  const ramen = getRamenAfterOneSecond();
  expect(ramen).toBe('sio ramen');
});
