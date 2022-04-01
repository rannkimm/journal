///////////// IMPORT ////////////////
import '../Entry.css'
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
            <div className='title'>Tell me about today...</div>
            <form onSubmit={submitData}>
                <button>Submit</button>
                <div className='inputDiv'>
                <input className='date' type='text' value={props.newUserEntry.date} onChange={props.handleChange} name={'date'} placeholder={'date'}/>
                <input className='goal' type='text' value={props.newUserEntry.goal} onChange={props.handleChange} name={'goal'} placeholder={'today\'s goal'}/>
                <input className='toDo' type='text' value={props.newUserEntry.toDo} onChange={props.handleChange} name={'toDo'} placeholder={'to do list'}/>
                <input className='message' type='text' value={props.newUserEntry.message} onChange={props.handleChange} name={'message'} placeholder={'today\'s highlights'}/>
                </div>
            </form>
        </div>
    )
}

export default Entry