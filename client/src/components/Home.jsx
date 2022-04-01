//////////////// IMPORT /////////////////
import '../Home.css'
import Nav from './Nav'

////////////// HOME COMPONENT FUNCTION ////////////////
const Home = (props) => {


    return (
        <div>
        <Nav />
        <div className='home'>Start recording your day!</div>
        <p>sign in or login to start</p>
        </div>
    )
}

export default Home