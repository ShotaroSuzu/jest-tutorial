import {
  clearConnection,
  clearDb,
  findStation,
  initConnection,
  initDb,
} from '@/setup';

// このモジュールを実行する時に1回だけ呼ばれる
beforeAll(() => {
  initDb('station');
});

// このモジュール実行後に1回だけ呼ばれる
afterAll(() => {
  clearDb('station');
});

// test関数が呼ばれる前に実行される。
// describeの外にあるが、describe内のtestを呼ぶ時にも実行される。
beforeEach(() => {
  initConnection('station');
});

// test関数が呼ばれた後に実行される
// describeの外にあるが、describe内のtestを呼ぶ時にも実行される。
afterEach(() => {
  clearConnection('station');
});

test('load station', () => {
  const station = findStation('kitasenju');
  expect(station).toEqual({
    stationName: '北千住',
    postalNo: '120-0026',
    lines: ['日比谷', '千代田', '常磐', 'つくばエクスプレス', '上野東京'],
  });
});

test('load not existing station', () => {
  const station = findStation('kitmanju');
  expect(station).toBeUndefined();
});

describe('in describe', () => {
  // describe内のテストが実行される前に1回だけ呼ばれる
  beforeAll(() => {
    initDb('station in describe');
  });

  // describe内のテストの実行が終わった後に1回だけ呼ばれる
  afterAll(() => {
    clearDb('station in describe');
  });

  // test関数が呼ばれる前に実行される
  beforeEach(() => {
    initConnection('station in describe');
  });

  // test関数が呼ばれた後に実行される
  afterEach(() => {
    clearConnection('station in describe');
  });

  test('load station', () => {
    const station = findStation('kitasenju');
    expect(station).toEqual({
      stationName: '北千住',
      postalNo: '120-0026',
      lines: ['日比谷', '千代田', '常磐', 'つくばエクスプレス', '上野東京'],
    });
  });

  test('load not existing station', () => {
    const station = findStation('kitmanju');
    expect(station).toBeUndefined();
  });
});

// describeブロックの実行順序のお話
// describeブロックを実行完了してテストを集める→テストを実行する
// (testとdescribe実行ごとにそれぞれに設定されたsetup/teardownを実行する)
