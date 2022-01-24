import { getRamenAfterOneSecond } from '@/async';

describe('Ramen Creator', () => {
  test('when order is sio, create sio ramen', () => {
    // 非同期処理の場合は待たずに後続が実行されてしまうので、このテストは失敗する
    //   const ramen = getRamenAfterOneSecond();
    //   expect(ramen).toBe('sio ramen');
    // テストでも通常の非同期処理を待つ場合と同じように、以下のように書く。
    // しかし、 return は省略してかけない
    return getRamenAfterOneSecond('sio').then((ramen) => {
      expect(ramen).toBe('sio ramen');
    });
  });

  test('when order is tonkotsu, return error', () => {
    expect.assertions(1);
    return getRamenAfterOneSecond('tonkotsu').catch((e) =>
      expect(e.message).toMatch('うちは塩しかやってねーんだよ！')
    );
  });
});
