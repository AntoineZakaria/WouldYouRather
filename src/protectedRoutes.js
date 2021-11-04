import React from "react";
import { connect } from "react-redux";
import { Redirect,Route } from "react-router-dom";



const ProtectedRoute = ({ component: Component, exact, path, authedUser }) => (
    <Route
   
      exact={exact}
      path={path}
      render={(props) =>
        authedUser ?
        (
          <Component {...props} />
        ) :
        (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}/>
            )}/>
    
  )


function mapStateToProps ({ authedUser }) {
    return {authedUser,

    }

}
   
export default connect(mapStateToProps)(ProtectedRoute)