import React from 'react';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

import './global.css';

import Routes from './routes';

function App() {

  return (
    <Routes />
  );

}

export default App;
