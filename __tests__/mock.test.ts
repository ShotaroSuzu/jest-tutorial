import { myForEach, getUsers } from '@/mock';
import axios from 'axios';
import Users from '../src/users';
import { mocked } from 'ts-jest/utils';
describe('mock properties', () => {
  test('mock properties', () => {
    //モック関数の作成とモックを渡す
    const mockCallBack = jest.fn((x) => 42 + x);
    myForEach([0, 2], mockCallBack);

    // 呼ばれる回数の検査
    expect(mockCallBack.mock.calls.length).toBe(2);

    // 指定された回数目の呼び出し時に指定された番号の引数がどのような値だったのかの検査
    // calls[0][0] ← call[N回目の呼び出し(0始まり)][N番目の引数]
    expect(mockCallBack.mock.calls[0][0]).toBe(0);
    expect(mockCallBack.mock.calls[1][0]).toBe(2);

    // 指定された回数目の呼び出し時の結果がどのような値だったのかを検査する
    expect(mockCallBack.mock.results[0].value).toBe(42);
    expect(mockCallBack.mock.results[1].value).toBe(44);

    // インスタンスかされた回数も記録できる。
    expect(mockCallBack.mock.instances.length).toBe(2);
  });
});

describe('mock return value', () => {
  // 使い方としては、テスト対象のロジックに渡す(or テスト対象の関数を置き換える)ことで、
  // 狙った動きをさせたり、依存関係を切ったりする
  test('basic usage', () => {
    const myMock = jest.fn();
    console.log(myMock); //この時点では、myMockはundefinedとなる

    // 呼び出される順に戻り値を定義してあげる
    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce('x')
      .mockReturnValue(true);
    myMock();
    expect(myMock.mock.results[0].value).toBe(10);
    myMock();
    expect(myMock.mock.results[1].value).toBe('x');
    myMock();
    expect(myMock.mock.results[2].value).toBe(true);
  });
  test('replace function', () => {
    const filterTestFun = jest.fn();

    filterTestFun.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const result = [11, 12].filter((num) => filterTestFun(num));
    expect(result).toEqual(expect.arrayContaining([11]));
    expect(result).toEqual(expect.not.arrayContaining([12]));
  });
});

describe('mock of modules)', () => {
  const users = [{ uuid: 'hoge-piyo-001', empNo: 'hoge001', age: 20 }];
  jest.mock('@/myAxios', () => {
    getAll: {
      return users;
    }
  });

  test('whole module', async () => {
    const result = getUsers();
    await expect(result).resolves.toEqual(users);
  });
});

jest.mock('axios');
test('should fetch users', () => {
  const users = [{ name: 'bob' }];
  const resp = { data: users };
  mocked(axios, true).get.mockResolvedValue(resp);
  return Users.all().then((data) => expect(data).toEqual(users));
});
