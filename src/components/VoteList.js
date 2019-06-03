import React from 'react';
import PropTypes from 'prop-types';
import VoteItem from './VoteItem';

const VoteList = ({ votes, actions }) => {
  return (
    <div className="container">
      <div class="row">
        {votes.map(vote =>
          <VoteItem key={vote.id} vote={vote} {...actions} />
        )}
      </div>
    </div>
  );
};

VoteList.propTypes = {
  votes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
};

export default VoteList;
