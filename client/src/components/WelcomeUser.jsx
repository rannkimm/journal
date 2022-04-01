///////////// IMPORT /////////////
import Nav2 from "./Nav2"

///////// WELCOMEUSER COMPONENT FUNCTION ///////////
const WelcomeUser = (props) => {

    return (
        <div>
            <Nav2 />
           Welcome {props.currentUser.name}!
        </div>
    )
}
    
    export default WelcomeUser