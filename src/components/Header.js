import React from 'react';
import PropTypes from 'prop-types';
import VoteTextInput from './VoteTextInput';

const Header = ({ addVote }) => (
  <header className="header">
    <div className="container">
      <div className="col-sm-12">
        <h1 className="text-center">Votes</h1>
        <VoteTextInput
          onSave={(text) => {
            if (text.length !== 0) {
              addVote(text)
            }
          }}
          placeholder="For who is your vote?"
        />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  addVote: PropTypes.func.isRequired
};

export default Header;
