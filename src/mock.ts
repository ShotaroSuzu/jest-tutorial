import { getAll } from '@/myAxios';
export const myForEach = <T>(items: T[], callback: any) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
};

type User = { uuid: string; empNo: string; age: number };
export const getUsers = (): User[] | {} => {
  return getAll('/user.json')
    .then((result) => result)
    .catch((error) => {});
};
