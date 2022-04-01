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
                    <input type='text' value={props.newUser.username} onChange={props.userHandleChange} name={'username'} placeholder={'username'}/>
                    <input type='text' value={props.newUser.name} onChange={props.userHandleChange} name={'name'} placeholder={'name'}/>
                    <input type='text' value={props.newUser.email} onChange={props.userHandleChange} name={'email'} placeholder={'email'}/>
                    <input type='password' value={props.newUser.password} onChange={props.userHandleChange} name={'password'} placeholder={'password'}/>
                    <input type='password' value={props.newUser.confirmPassword} onChange={props.userHandleChange} name={'confirmPassword'} placeholder={'confirm password'}/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
        
    )
}

export default UserSignin