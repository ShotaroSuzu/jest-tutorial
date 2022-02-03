export const getAll = (
  path: string
): Promise<{ uuid: string; empNo: string; age: number }[]> => {
  return new Promise((resolve, reject) => {
    try {
      console.log(`API called: getAll path: ${path}`);
      resolve(getFromApi(path));
    } catch (e) {
      reject(new Error(`Fail to call API path: ${path}`));
    }
  });
};

const getFromApi = (path: string) => {
  console.log(`${path} success`);
  return [{ uuid: 'hoge-piyo-001', empNo: 'hoge001', age: 20 }];
};
