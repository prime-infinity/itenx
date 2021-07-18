import { Route, Switch } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {

  return (
   <div className="container-fluid">

     <Switch>
        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>

     </Switch>
     
   </div>
  ); 
}

export default App;
