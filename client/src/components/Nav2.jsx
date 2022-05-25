////////////// IMPORT //////////////
import { Link } from "react-router-dom"

////////// NAV2 COMPONENT FUNCTION ////////////////
const Nav2 = (props) => {


    ///// FUNCTION TO RESET CURRENT USER /////
    const resetUser = () => {
        props.setCurrentUser({})
        localStorage.clear()
    }

    return (
        <header>
            <nav id="nav">
                <Link id="navText" onClick={resetUser} to='/'>Logout</Link>
                <Link id="navText" to='/userhome'>My Home</Link>
                <Link id="navText" to='/userentries'>My Entries</Link>
                <Link id="navText" to='/userentries/entry'>New entry</Link>
                <Link id="navText" to='/postcomment'>Post</Link>
            </nav>
        </header>
    )
}

export default Nav2