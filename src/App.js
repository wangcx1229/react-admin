import React from 'react'
import {Switch,Route,Router,HashHistory,Link, HashRouter} from 'react-router-dom'
import Home from './views/Home'
import About from './views/About';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
     <HashRouter>
       <Switch>
         <Route component={Home} exact path='/'/>
         <Route component={About} path='/about'/>
       </Switch>
     </HashRouter>
    )
  }
}


export default App;
