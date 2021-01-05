import { BrowserRouter } from "react-router-dom";
import React from "react";
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
