import { connect } from 'react-redux';
import * as VoteActions from '../actions';
import { bindActionCreators } from 'redux';
import MainSection from '../components/MainSection';
import { getVisibleVotes } from '../selectors';

const mapStateToProps = state => ({
  votesCount: getVisibleVotes(state).length,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(VoteActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection);

