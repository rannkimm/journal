import Nav2 from "./Nav2"

const WelcomeUser = (props) => {

   
    return (
        <div>
            <Nav2 />
           Welcome {props.currentUser.name}!
        </div>
    )
    
    }
    
    export default WelcomeUser