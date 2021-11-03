import Signup from './components/Signup';
import Login from './components/Login';
import {Route,Switch} from  'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Layout from './components/Layout';

 const App=()=>{
   return(<>
      
      <div>
        sdhsfdbsfsj
      </div>
    <Switch>
    <Route exact path="/" component={Navbar}/>
    <Layout>
    <Route  path="/signup" component={Signup}/>
    <Route path="/login" component={Login}/>
    </Layout>
    </Switch>
    
     
   
      

  
       
   </>)
 }

export default App;
