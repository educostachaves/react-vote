import { connect } from 'react-redux';
import Header from '../components/Header';
import { addVote } from '../actions';

export default connect(null, { addVote })(Header);
