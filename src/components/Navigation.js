import React,{Component} from "react";
import { connect } from "react-redux";
import {NavLink,withRouter} from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser'





class Navigation extends Component{
    componentDidMount(){
        const {authedUser}=this.props
        this.setState(()=>({authedUser}))
    }

    state={
        authedUser:null
      }
    logout =()=>{
        this.setState(()=>({authedUser:null}))
        this.props.dispatch(setAuthedUser(null))
    
      }




    render(){
        const {authedUser,history}= this.props
        

        
        

            return (
                <nav className='nav'>
                    <ul>
                        <li>
                            <NavLink to ='/' exact activeClassName='active'>
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to ='/add' exact activeClassName='active'>
                                New question
                            </NavLink>
        
                        </li>
                        <li>
                            <NavLink to ='/leaderboard' exact activeClassName='active'>
                                Leaderboard
                            </NavLink>

                        </li>
                       
                        { authedUser &&
                        <li>
                        
                            <button onClick={()=>{
                            this.logout()
                            history.push('/login')

                            
                        }}>
                                logout
                            </button>
                        </li>

                        
                        }
                           <li id='right'>
                            {authedUser}
                        </li>
                        
                    </ul>
                 
                </nav>
            )
        
    }
}

function mapStateToProps({authedUser,history}){
    return{authedUser}
}






export default withRouter(connect(mapStateToProps) (Navigation))