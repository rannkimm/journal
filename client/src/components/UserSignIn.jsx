import Nav from './Nav'

const UserSignin = (props) => {

    const submitNewUser = (e) => {
        e.preventDefault()
        props.addNewUser(e)
        
    }

    return (
        <div>
            <Nav />
            <div>
                <form onSubmit={submitNewUser}>
                    <input type='text' value={props.newUser.name} onChange={props.userHandleChange} name={'name'} placeholder={'name'}/>
                    <input type='text' value={props.newUser.email} onChange={props.userHandleChange} name={'email'} placeholder={'email'}/>
                    <input type='text' value={props.newUser.password} onChange={props.userHandleChange} name={'password'} placeholder={'password'}/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
        
    )
}

export default UserSignin