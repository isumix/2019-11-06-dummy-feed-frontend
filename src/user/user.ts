import invert from 'invert-color';
import {stringToColor} from '../share/color';

export type User = {
  id: number;
  username: string;
  primaryColor: string;
  secondaryColor: string;
};

export type Users = {
  [propName: number]: User;
};

export const indexUsers = (list: [User]) => list.reduce(
  (acc, user) => {
    user.primaryColor = stringToColor(user.username);
    user.secondaryColor = invert(user.primaryColor, true);
    acc[user.id] = user;
    return acc;
  },
  {} as Users
);
