export const getRamenAfterOneSecond = (): string => {
  let ramen = '';
  setTimeout((ramen) => {
    console.log('Getting order, creating ramen...');
    ramen = createRamen(1000);
  }, 10);
  return ramen;
};

const createRamen = (timeout: number) => {
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
