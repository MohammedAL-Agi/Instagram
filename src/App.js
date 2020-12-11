import {BrowserRouter as Router,  Route } from 'react-router-dom';
import Home from './Home'
import Profile from './components/Profile';

function App() {
  return (
   <Router>
    <div>
    <Route path="/" exact component={Home}/>
    <Route path="/profile" component={Profile} />    
    </div>
    </Router>
  );
}

export default App;
