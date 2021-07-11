
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
