import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LoginContainer from './components/auth/LoginContainer';
import './App.css';
import { loadUser } from './data/redux/auth/authActions';
import { Dimmer, Loader } from 'semantic-ui-react';
import Main from './components/main';


const App = ({ isAuthenticated, isInitialized, loadUser }) => {

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  if (!isInitialized) {
    return (<Dimmer active><Loader content="Loading news portal..." /></Dimmer>);
  }

  return (
    <React.Fragment>
      {isAuthenticated ? <Main /> : <LoginContainer />}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isInitialized: state.auth.initialized
})

export default connect(mapStateToProps, { loadUser })(App);
