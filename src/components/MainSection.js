import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import VisibleVoteList from '../containers/VisibleVoteList';

const MainSection = ({ votesCount }) =>
(
  <section className="main">
    {
      !!votesCount
    }
    <VisibleVoteList />
    {
      !!votesCount &&
      <Footer
        votesCount={votesCount}
      />
    }
  </section>
);

MainSection.propTypes = {
  votesCount: PropTypes.number.isRequired
};

export default MainSection;
