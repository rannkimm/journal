import { Link } from "react-router-dom"

const Nav2 = () => {


    return (
        <header>
            <nav>
                <Link to='/'>Logout</Link>
                <Link to='/userentry'>My Entries</Link>
                <Link to='/userentry/entry'>New entry</Link>
                <Link to='/postcomment'>Post</Link>
            </nav>
        </header>
    )
}

export default Nav2