import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

const UserLogin = (props) => {

    let navigate = useNavigate()

    const submitExistUser = (e) => {
        e.preventDefault()
        props.getExistUser(e)
        console.log('all users', props.users)
        console.log('login user', props.findUser)
        if (props.users.includes(props.findUser) === true) {
            console.log('exists')
        }
        // navigate('/userhome')
    }

    return (
        <div>
            <Nav />
            <div>
                <form onSubmit={submitExistUser}>
                    <input type='text' value={props.loginUser.name} onChange={props.loginHandleChange} name={'name'} placeholder={'name'}/>
                    <input type='text' value={props.loginUser.email} onChange={props.loginHandleChange} name={'email'} placeholder={'email'}/>
                    <input type='text' value={props.loginUser.password} onChange={props.loginHandleChange} name={'password'} placeholder={'password'}/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
        
    )
}

export default UserLogin