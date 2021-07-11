import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {

  return (
   <div>

     <Switch>
        <Route path='/login'>
          <Login />
        </Route>
     </Switch>
     
   </div>
  ); 
}

export default App;
