import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from '../Wia/Example';


export default class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <Header />
          <div>
            <Switch>
                {/* <Route exact path='/posts' component={PostsList}  /> */}
                <Route exact path='/' component={Index}  />
                {/* <Route exact path='/:slug' component={SinglePost}  /> */}
            </Switch>
          </div>
      </BrowserRouter>
    )
  }
}

if(document.getElementById('app')){
  ReactDOM.render(<App />, document.getElementById('app'));

}
