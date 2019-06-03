import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class VoteItem extends Component {
  static propTypes = {
    vote: PropTypes.object.isRequired,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
  };

  render() {
    const { vote, upVote, downVote } = this.props

    let element = (
      <div class="card sm-12 shadow-sm">
        <div class="card-body">
          <p class="card-text">{vote.text}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => upVote(vote.id)}>Up</button>
              <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => downVote(vote.id)}>Down</button>
            </div>
            <small class="text-muted">{vote.count} votes</small>
          </div>
        </div>
      </div>
    );

    return (
      <div class="col-sm-12">
        {element}
      </div>
    );
  };
};
