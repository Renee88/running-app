import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import './App.css'


const App = () => {
    
    return(
     <Router>
         <Route path='/' component={Home}></Route>
     </Router>
    )
}

export default App;