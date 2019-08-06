import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreator';
import { withRouter } from 'react-router-dom';

// Components
import Main from './components/Main';

export function mapStateToProps(state) {
  return {
    movies: state.movies,
    characters: state.characters,
    selected: state.selected,
    filter: state.filter,
  };
};

export function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

const App = withRouter(connect(mapStateToProps, mapDispachToProps)(Main));
  

export default App;
