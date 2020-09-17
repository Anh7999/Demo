import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import App from '../App/App';
import Sidebar from '../Sidebar/Sidebar';
  
class RouterURL extends Component {
    render() {
        return (
            <Router>
                <div>
                     <Route exact path="/" component={App}/>
                     
                </div>
            </Router>
        );
    }
}

export default RouterURL;