import React, { Component } from 'react';
import Router from "./router/Router";
import routes from "./router/routes/routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router routes={routes} />
      </div>
    );
  }
}

export default App;
