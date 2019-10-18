import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const PerformancePage = () => (
  <div>
    <h1>Performance Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/performance" component={PerformancePage} />
      </Switch>
    </div>
  );
}

export default App;
