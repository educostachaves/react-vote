import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  const { votesCount } = props;
  return (
    <footer className="footer">
      <span className="count">
        <strong>{votesCount || 'No'}</strong> Votes
      </span>
    </footer>
  );
};

Footer.propTypes = {
  votesCount: PropTypes.number.isRequired,
};

export default Footer;
