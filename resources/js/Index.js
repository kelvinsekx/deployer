import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/App/LandingPage';
import SinglePage from './components/App/SinglePage/SinglePage'
import CreatePage from './components/App/SubmitPost'

if (document.getElementById('root-page')) {
    ReactDOM.render(<BrowserRouter>
      <div>
          <Switch>
          <Route exact={true} path="/affiliate-marketing" component={LandingPage}/>
          <Route exact={true} path="/affiliate-marketing/create"  component={CreatePage}/>
          <Route exact={true} path="/affiliate-marketing/:slug" component={SinglePage}/>
          </Switch>
      </div>
    </BrowserRouter>, document.getElementById('root-page'));
}