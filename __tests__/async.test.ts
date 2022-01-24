import { getRamenAfterOneSecond } from '@/async';

test('Ramen Creator', () => {
  const ramen = getRamenAfterOneSecond();
  expect(ramen).toBe('sio ramen');
});
