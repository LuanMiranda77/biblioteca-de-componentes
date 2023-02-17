import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GbButton } from '../.';

const App = () => {
  return (
    <div>
      <GbButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
