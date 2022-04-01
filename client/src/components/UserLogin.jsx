import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

const UserLogin = (props) => {

    let navigate = useNavigate()

    const checkUser = () => {
        console.log('all users', props.users)
            console.log('find user', props.findUser)
            console.log('current user', props.currentUser)
            // if (props.findUser === props.currentUser) {
            //     // navigate('/userhome')
            //     console.log('same')
            // } else if(props.findUser !== props.currentUser) {
            //     console.log('different')
            // }
    }

    const submitExistUser = (e) => {
        e.preventDefault()
        props.getExistUser(e)
        checkUser()

        
    }

    return (
        <div>
            <Nav />
            <div>
                <form onSubmit={submitExistUser}>
                    <input type='text' value={props.loginUser.ysername} onChange={props.loginHandleChange} name={'username'} placeholder={'username'}/>
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