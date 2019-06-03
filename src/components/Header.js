import React from 'react';
import PropTypes from 'prop-types';
import VoteTextInput from './VoteTextInput';

const Header = ({ addVote }) => (
  <header className="header">
    <h1>Votes</h1>
    <VoteTextInput
      onSave={(text) => {
        if (text.length !== 0) {
          addVote(text)
        }
      }}
      placeholder="For who is your vote?"
    />
  </header>
);

Header.propTypes = {
  addVote: PropTypes.func.isRequired
};

export default Header;
