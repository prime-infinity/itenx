import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'

function App() {

  return (
   <div>
     <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
    </Switch>
   </div>
  ); 
}

export default App;
