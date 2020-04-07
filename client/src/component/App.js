import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNav from './TopNav';
import ItemsBody from './ItemsBody';
import SingleItem from './SingleItem';

const App = () => {
  return (
    <>
      <Router>
        <TopNav />
        <div className="container">
          <Switch>
            <Route path="/:id" component={SingleItem} />
            <Route path="/" exact component={ItemsBody} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
