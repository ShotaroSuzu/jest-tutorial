export const initDb = (target: string) => {
  console.log(`Initialize Database ${target}`);
};

export const clearDb = (target: string) => {
  console.log(`Clear Database  ${target}`);
};
export const initConnection = (target: string) => {
  console.log(`Initialize Connection ${target}`);
};

export const clearConnection = (target: string) => {
  console.log(`Clear Connection  ${target}`);
};

type station = {
  stationName: string;
  postalNo: string;
  lines: string[];
};
export const findStation = (station: string): station | undefined => {
  if (station === 'kitasenju') {
    console.log('kitasenju is found');
    return {
      stationName: '北千住',
      postalNo: '120-0026',
      lines: ['日比谷', '千代田', '常磐', 'つくばエクスプレス', '上野東京'],
    };
  }
  console.log('no station are found');
  return undefined;
};
