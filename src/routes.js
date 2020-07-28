import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from './components/profile/profile'
import Cardview from './components/cardView/cardViiew';


class Routers extends Component {
    constructor(props){
        super(props)
        this.state = {
            roleType: '',
        }
    }
  
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Profile}    />
                    <Route path="/cardview" exact component={Cardview}    />
                </Switch>
            </Router>
        )
    }
} 



  export default Routers;