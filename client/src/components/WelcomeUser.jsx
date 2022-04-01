///////////// IMPORT /////////////
import '../WelcomeUser.css'
import Nav2 from "./Nav2"

///////// WELCOMEUSER COMPONENT FUNCTION ///////////
const WelcomeUser = (props) => {
    console.log(props.currentUser[0].name)
    return (
        <div>
            <Nav2 />
            <div className='welcome'>Welcome {props.currentUser[0].name}!</div>
            <div className='info'>
                <p className='view'>view your entries</p>
                <p className='create'>create a new entry</p>
            </div>
           
        </div>
    )
}
    
    export default WelcomeUser