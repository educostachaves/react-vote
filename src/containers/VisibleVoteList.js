import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as VoteActions from '../actions';
import VoteList from '../components/VoteList';
import { getVisibleVotes } from '../selectors';

const mapStateToProps = state => ({
  votes: getVisibleVotes(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(VoteActions, dispatch),
});

const VisibleVoteList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VoteList);

export default VisibleVoteList;
