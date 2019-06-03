import * as types from '../constants/ActionTypes';

export const addVote = text => ({ type: types.ADD_VOTE, text });
export const upVote = id => ({ type: types.UP_VOTE, id });
export const downVote = id => ({ type: types.DOWN_VOTE, id });
