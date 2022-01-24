export const getRamenAfterOneSecond = (order: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log('Getting order, creating ramen...');
        resolve(createRamen(order, 1000));
      } catch (e) {
        reject(e);
      }
    }, 10);
  });
};

const createRamen = (menu: string, timeout: number) => {
  if (menu !== 'sio') {
    throw new Error('うちは塩しかやってねーんだよ！');
  }

  console.log('start create ramen!');
  const startTime = Date.now();
  while (true) {
    const diffTime = Date.now() - startTime;
    if (diffTime >= timeout) {
      console.log('いっちょあがり！');
      return 'sio ramen';
    }
  }
};
