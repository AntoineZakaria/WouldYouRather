import React ,{Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { setAuthedUser } from '../actions/authedUser'




class Login extends Component {

    state ={
        authedUser : null,
        redirect:false

    }

    handleChange =(e)=>{

        const authedUser = e.target.value 


        this.setState(()=>({authedUser}))
       



    }

    handleSubmit =(e)=>{
        e.preventDefault()

        

        if(this.state.authedUser==='')
        {
            alert("please select a user ")
        }

        else{
            this.setState(()=>({redirect:true}))



        const{authedUser}=this.state
        const{dispatch}=this.props

        dispatch(setAuthedUser(authedUser))}

    }


    render(){
        const {usernames} = this.props
        const {from}=this.props.location.state || {from:{pathname:'/'}}

        if(this.state.redirect)
        {
        return<Redirect to={from}/>
        }
      
        return(
            <div>

            

            <form onSubmit={this.handleSubmit}>

            <select defaultValue=''
             onChange={this.handleChange}>
                 <option> -- select user -- </option>
                 {
                usernames.map(user=>(

                    <option
                    key={user.value}
                     value={user.value}>
                        {user.value}
                        </option>
                ))
                
                
                
                
                }

            </select>

            <button type='submit'>
                login

            </button>
            </form>
             
               
            </div>
        )
    }


}
function mapStateToProps({ users }) {
	return {
		usernames: Object.keys(users).map((id) => ({
			value: id,
			name: users[id].name
		}))
	};
}

export default connect(mapStateToProps)(Login)