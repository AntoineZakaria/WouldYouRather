import React,{Component} from "react";  
import { connect } from "react-redux";
import sortBy from'sort-by'


class Leaderboard extends Component{



    render(){

        const{users}=this.props

        let usersarr=Object.keys(users).map(user=>({
            id:user,
            name:users[user].name,
            avatarURL:users[user].avatarURL,
            answeredQuestions:Object.keys(users[user].answers).length,
            score:Object.keys(users[user].answers).length + users[user].questions.length,

        })).sort(sortBy('-score'))

        console.log(usersarr)


        return (

            <div> 
                {
                    usersarr.map(user=>(

                       
                        <div className='question' key={user.id}>
                            <h3 className='center'> {user.name}</h3>

                               


                       

                         <img
                            src={user.avatarURL}
                            alt={`avatar of:${user.name}`}
                            className='avatar-leader'/>

                            
                                <br/>

                       

                            <span>
                            <p>
                                answered Questions {user.answeredQuestions}
                                <br/><br/><br/>
                                created Questions {user.score-user.answeredQuestions}

                            </p>
                            <p>
                                score {user.score}
                            </p>

                            


                            </span>
                            

                        

                        </div>
                       
                        
                    ))
                    

                }
                
            </div>





        )
    }
}

function mapStateToProps({users}){

    return{users}

}


export default connect(mapStateToProps)(Leaderboard)
