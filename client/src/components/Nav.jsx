////////////////// IMPORT //////////////////////
import { Link } from "react-router-dom"

///////////////// NAV COMPONENT FUNCTION /////////////////////
const Nav = (props) => {

    ///// FUNCTION TO RESET CURRENT USER /////
    const resetUser = () => {
        props.setCurrentUser({})
    }
    
    return (
        <header>
            <nav id="nav">
                <Link id="navText" to='/'>Home</Link>
                <Link id="navText" onClick={resetUser} to='/userlogin'>Login</Link>
                <Link id="navText" onClick={resetUser} to='/usersignin'>Signup</Link>
            </nav>
        </header>
    )
}

export default Nav