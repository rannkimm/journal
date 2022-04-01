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
            <nav>
                <Link to='/'>Home</Link>
                <Link onClick={resetUser} to='/userlogin'>Login</Link>
                <Link onClick={resetUser} to='/usersignin'>Signin</Link>
            </nav>
        </header>
    )
}

export default Nav