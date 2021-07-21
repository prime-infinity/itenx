
import { useState } from 'react'
import Header from './components/Header'
import Items from './components/Items'
import Additem from './components/Additem'

function App() {

  const [items, setItems] = useState([
      {
          id:1,
          name: 'osamede',
          age:20,
          hobby:'bush',
          state:true,
      },
      {
          id:2,
          name:'david',
          age:'35',
          hobby:'zoo',
          state:true,
      },
      {
          id:3,
          name:'oje',
          age:'100',
          hobby:'wisdom',
          state:false,
      },
      {
          id:4,
          name:'raymond',
          age:'19',
          hobby:'phone',
          state:true,
      }
  ])

  var addItem = (object) => {

    var id = Math.floor(Math.random() * 1000 )+ 1
    var newTask =  { id, ...object   }

    setItems([...items, newTask])
    //setItems(items.push(newTask))
    //console.log(newTask)
  }

  var deleteTask = (id) => {
    //console.log(id)
    //setItems(items.filter((it) => it.id !== id))
  }
  //{items.length > 0 ? <Items ittt={ items } onDelete={deleteTask}/> : 'no items to show'}

  var toggle = (id) => {
    setItems(items.map((it) => it.id === id ? {...it, state: !it.state} : it))
    //console.log(id)
  }
  return (
   <div>
     <Header title='i am a header' naaa='osamede' />
     {items.length > 0 ? <Items ittt={ items } onDelete={deleteTask} onToggle={toggle}/> : 'no items to show'}
     <Additem  onAdd={addItem}/>
   </div>
  ); 
}

export default App;
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




return(authCtx.auth.name ? 

        <button>you are already logged in</button>:
        
        <div className="row">
            
            <div className="col-12">

                <div className="row pt-5">
                    
                    <div className="col-11 col-md-5 col-lg-5 mx-auto mt-5">
                        
                        <CardOne>
                            <div className="form-group mb-5 mt-2">
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Email or Phone Number" className={`form-control customInput ${classes.customInput}`} />
                            </div>

                            <div className="form-group mb-5 mt-5">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" className={`form-control customInput ${classes.customInput}`} />
                            </div>

                            <button onClick={loginUser} type="submit" className="btn customInputButton">
                                <div>Sign in</div>
                            </button>

                            <div className="text-center mt-4">
                                Not yet a member <br></br> <Link  to="register">Create an account</Link>
                            </div>

                        </CardOne> 
                    </div>
                    
                </div>

            </div>

        </div>
    );

    <button className="btn btn-danger" onClick={logoutUnauth}>Logout</button>
            <button className="btn btn-primary" onClick={showAuth}>showauth</button>
            <Link to="/login" ><button className="btn btn-primary">login</button></Link>

            {authCtx.auth.name ? 'logged in' : 'not logged in'}

            <div className={`col-md-3 mr-5 ml-5 col-12 mb-4 mt-4 blackBorder ${isShown ? classes.stuffPopoutForLap:""} ${addingId ? classes.stuffPopout:""}`} onClick={showStuffOptions} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
            <div className="row">
                <img className="img-fluid" width="100%" src={` /stuffimages/${props.stuffprop.image }`} alt="imasge"/>
            </div>
        </div>