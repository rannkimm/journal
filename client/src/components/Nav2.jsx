import { Link } from "react-router-dom"

const Nav2 = (props) => {

    const resetUser = () => {
        props.setCurrentUser({})
    }

    return (
        <header>
            <nav>
                <Link onClick={resetUser} to='/'>Logout</Link>
                <Link to='/userhome'>My Home</Link>
                <Link to='/userentries'>My Entries</Link>
                <Link to='/userentries/entry'>New entry</Link>
                <Link to='/postcomment'>Post</Link>
            </nav>
        </header>
    )
}

export default Nav2