import { Route, Switch } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

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
     </Switch>
     
   </div>
  ); 
}

export default App;
