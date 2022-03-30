import { Link } from "react-router-dom"

const Nav = () => {


    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/userlogin'>Login</Link>
                <Link to='/usersignin'>Signin</Link>
            </nav>
        </header>
    )
}

export default Nav