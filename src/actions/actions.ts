import * as types from '../constants/ActionTypes';

export function addPost(text: string): IAction {
  return { type: types.ADD_POST, payload: { text } };
};

export function increaseLikes(id: number): IAction {
  return { type: types.INCREASE_LIKES, payload: { id } };
};
