import Signup from './components/Signup';
import Login from './components/Login';
import {Route,Switch} from  'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

 const App=()=>{
   return(<>
      <Navbar/>
    <Switch>
    <Route path="/signup" component={Signup}/>
       <Route path="/login" component={Login}/>
    </Switch>
    
     
   
      

  
       
   </>)
 }

export default App;
