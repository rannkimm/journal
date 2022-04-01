//////////// IMPORT /////////////
import Nav from './Nav'

////////// USERLOGIN COMPONENT FUNCTION //////////////
const UserLogin = (props) => {


    ///// ONSUBMIT FUNCTION THAT CALLS ON GETEXISTUSER PROP /////
    const submitExistUser = (e) => {
        e.preventDefault()
        props.getExistUser(e)
    }

    return (
        <div>
            <Nav />
            <div>
                <form onSubmit={submitExistUser}>
                    <input type='text' value={props.loginUser.username} onChange={props.loginHandleChange} name={'username'} placeholder={'username'}/>
                    <input type='password' value={props.loginUser.password} onChange={props.loginHandleChange} name={'password'} placeholder={'password'}/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
        
    )
}

export default UserLogin