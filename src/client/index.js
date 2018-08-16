import React from 'react';
import { render } from 'react-dom';
import { SSL_OP_PKCS1_CHECK_2 } from 'constants';

const App = () => (
  <h2> Hello world </h2>
);

render( <App />, document.getElementById('root'));