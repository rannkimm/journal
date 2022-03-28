import { Link } from "react-router-dom"

const Nav = () => {


    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/user'>Signin</Link>
                <Link to='/user'>Login</Link>
            </nav>
        </header>
    )
}

export default Nav