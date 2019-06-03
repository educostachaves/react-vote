import {
  ADD_VOTE,
  UP_VOTE,
  DOWN_VOTE,
} from '../constants/ActionTypes';

const initialState = [
  {
    text: 'First Vote',
    count: 0,
    id: 0
  }
]

export default function votes(state = initialState, action) {
  switch (action.type) {
    case ADD_VOTE:
      return [
        ...state,
        {
          id: state.reduce((maxId, vote) => Math.max(vote.id, maxId), -1) + 1,
          count: 0,
          text: action.text,
        },
      ]

    case UP_VOTE:
      return state.map(vote => {
        if (vote.id === action.id) {
          vote.count++;
        }

        return vote;
      })

    case DOWN_VOTE:
      return state.map(vote => {
        if (vote.id === action.id) {
          vote.count--;
        }

        return vote;
      })

    default:
      return state;
  }
};
