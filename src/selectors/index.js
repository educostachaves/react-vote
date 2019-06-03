import { createSelector } from 'reselect';

const getVotes = state => state.votes;

export const getVisibleVotes = createSelector(
  [getVotes],
  (votes) => {
    const managedVotes = votes.sort((a, b) => a.count < b.count ? 1 : -1);
    if (managedVotes.length > 50) {
      managedVotes.pop();
    }
    return managedVotes;
  },
);
