import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component'
import Header from './components/header/header.component';
import SignInSignUpPage from './components/sign-in-sign-up/sign-in-sign-up.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
