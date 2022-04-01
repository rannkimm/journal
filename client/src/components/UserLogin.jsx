import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

const UserLogin = (props) => {

    let navigate = useNavigate()

    const submitExistUser = (e) => {
        e.preventDefault()
        props.getExistUser(e)
        // navigate('/userhome')


        
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