import React, { Component } from 'react';
import Header from 'components/Header'
import UserList from 'containers/UserList'

export default class  App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <UserList />
      </div>
    );
  }
}


// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Switch,
// } from 'react-router-dom';
// import React from 'react';

// const Home = () => <h1>Home</h1>;
// const About = () => <h1>About</h1>;

// // that return valid nodes. `children` always returns the given node whether there is a match or not.
// const App = () => (
//   <Router>
//     <div>
//       <Link to="/">Home</Link>{' '}
//       <Link to={{pathname: '/about'}}>About</Link>{' '}
//       <Link to="/contact">Contact</Link>
      
//       <Switch>
//         <Route path="/" component={Home} />
//         <Route path="/about" component={About} />
//       </Switch>
//     </div>
//   </Router>
// );


