import React,{Component} from "react";
import {connect} from 'react-redux'
import { handleInitialData } from "../actions/shared";
import Login from './login'
import Dashboard from "./Dashboard";
import Navigation from "./Navigation";

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ProtectedRoute from "../protectedRoutes";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import Leaderboard from "./Leaderboard";
import PageNotFound from './pageNotFound'
class App extends Component {

  state={
    authedUser:null
  }

 
  componentDidMount(){
    this.props.dispatch(handleInitialData())

    const {authedUser}=this.props

    this.setState(()=>({authedUser}))

  }



  render(){
   
  return (
    <Router>
       
        <div>
        <Navigation logout={this.logout}/>
        


        <Switch>
        <ProtectedRoute path ='/' exact component={Dashboard}/>
        <ProtectedRoute path ='/add'  component={NewQuestion}/>
        <ProtectedRoute path ='/question/:id'  component={QuestionPage}/>
        <ProtectedRoute path ='/leaderboard'  component={Leaderboard}/>
        

        

        <Route path ='/login'  component={Login}/>
        <ProtectedRoute  component={PageNotFound}/>
        </Switch>
  
    </div>
   

    </Router>
  
  );
  }
}

function mapStateToProps({authedUser}){
 
  return{authedUser,}
}

export default connect(mapStateToProps)(App);
