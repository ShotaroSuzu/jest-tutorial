export const sum = (a: number, b: number) => {
  return a + b;
};

export const objectEqual = (a: string, b: string) => {
  return { one: a, two: b };
};

export const getMyLunchCollection = (): string[] => {
  return ['ramen', 'sushi', 'nan', 'curry', 'banana'];
};

export const compileAndroidCode = () => {
  throw new Error('you are using the wrong JDK');
};
