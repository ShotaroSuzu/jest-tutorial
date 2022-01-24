import { getRamenAfterOneSecond } from '@/async';

describe('Ramen Creator promise pattern', () => {
  describe('then/catch pattern', () => {
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
  // こっちの方が簡潔に書ける
  describe('resolves/rejects pattern', () => {
    test('when order is sio, create sio ramen', () => {
      return expect(getRamenAfterOneSecond('sio')).resolves.toBe('sio ramen');
    });
    test('when order is tonkotsu, return error', () => {
      return expect(getRamenAfterOneSecond('tonkotsu')).rejects.toThrowError(
        'うちは塩しかやってねーんだよ！'
      );
    });
  });
});

describe('Ramen Creator async/await pattern', () => {
  describe('simple async await pattern', () => {
    test('when order is sio, create sio ramen', async () => {
      const ramen = await getRamenAfterOneSecond('sio');
      return expect(ramen).toBe('sio ramen');
    });
    test('when order is tonkotsu, return error', async () => {
      expect.assertions(1);
      try {
        const ramen = await getRamenAfterOneSecond('tonkotsu');
      } catch (e) {
        expect(e).toMatchObject({ message: 'うちは塩しかやってねーんだよ！' });
      }
    });
  });
  describe('with resolve/reject async await pattern', () => {
    test('when order is sio, create sio ramen', async () => {
      await expect(getRamenAfterOneSecond('sio')).resolves.toMatch('sio ramen');
    });
    test('when order is tonkotsu, return error', async () => {
      await expect(getRamenAfterOneSecond('tonkotsu')).rejects.toThrowError(
        'うちは塩しかやってねーんだよ！'
      );
    });
  });
});
