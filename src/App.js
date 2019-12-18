import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import reduxStore from './store';
import NameChange from './module/components/nameChange';
// import RegistrationForm from './module/components/RegistrationForm';
// import LoginForm from './module/components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store = {reduxStore} >
      <div>
        <NameChange />
        {/* <RegistrationForm /> */}
        {/* <LoginForm /> */}
      </div>
    </Provider>
  );
}

export default App;
