import React from 'react';
import {Route} from 'react-router-dom'
import Todo from './routes/Todo';
import Movie from './routes/Movie';
import Home from './routes/Home'
import GlobalStyles from './components/GlobalStyles';
function App() {
  
  return (
    <div>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/movie"  component={Movie}></Route>
      <Route path="/todo"  component={Todo}></Route>
      <GlobalStyles></GlobalStyles>
    </div>
  );
}

export default App;