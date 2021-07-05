import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Lists from './pages/Lists'
import Header from './components/Header'

function App() {

  return (
   <div>

     <Header />

     <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/list'>
        <Lists />
      </Route>
    </Switch>
   </div>
  ); 
}

export default App;
