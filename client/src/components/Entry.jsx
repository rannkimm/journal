///////////// IMPORT ////////////////
import Nav2 from './Nav2'
import { useNavigate } from "react-router-dom"

//////////// ENTRY COMPONENT FUNCTION //////////////
const Entry = (props) => {

    let navigate = useNavigate()

    const submitData = (e) => {
        e.preventDefault()
        props.addNewUserEntry(e)
        navigate('/userentries')
    }

    return (
        <div>
            <Nav2 />
            <form onSubmit={submitData}>
                <input type='text' value={props.newUserEntry.date} onChange={props.handleChange} name={'date'} placeholder={'date'}/>
                <input type='text' value={props.newUserEntry.goal} onChange={props.handleChange} name={'goal'} placeholder={'today\'s goal'}/>
                <input type='text' value={props.newUserEntry.toDo} onChange={props.handleChange} name={'toDo'} placeholder={'to do list'}/>
                <input type='text' value={props.newUserEntry.message} onChange={props.handleChange} name={'message'} placeholder={'today\'s highlights'}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Entry