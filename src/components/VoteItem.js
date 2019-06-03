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
        <div className="view">
          <label>
            {vote.text}
          </label>
          <p>{vote.count}</p>
          <button type="button" onClick={() => upVote(vote.id)}>UP</button>
          <button type="button" onClick={() => downVote(vote.id)}>DOWN</button>
        </div>
      )

    return (
      <li>
        {element}
      </li>
    )
  };
};
