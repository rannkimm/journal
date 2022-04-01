///////////// IMPORT /////////////
import '../WelcomeUser.css'
import Nav2 from "./Nav2"

///////// WELCOMEUSER COMPONENT FUNCTION ///////////
const WelcomeUser = (props) => {

    return (
        <div>
            <Nav2 />
            <div className='welcome'>Welcome {props.currentUser.name}!</div>
            <div className='info'>
                <p className='view'>view your entries</p>
                <p className='create'>create a new entry</p>
            </div>
           
        </div>
    )
}
    
    export default WelcomeUser