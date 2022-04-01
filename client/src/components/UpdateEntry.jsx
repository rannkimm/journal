////////////// IMPORT ////////////////
import '../Entry.css'
import { useNavigate } from "react-router-dom"

/////////// UPDATEENTRY COMPONENT FUNCTION ///////////
const UpdateEntry = (props) => {

    ///// VARIABLE DEFINING USERNAVIGATE /////
    let navigate = useNavigate()

    /////ONSUBMIT FUNCTION /////
    const submitData = (e) => {
        e.preventDefault()
        props.updateUserEntry(props.selectedEntry)
        navigate('/userentries')
    }

    return (
        <div>
            <div className="title">Edit your entry...</div>
            <form onSubmit={submitData}>
                <button>Submit</button>
                <div className="inputDiv">
                    <input className="date" type='text' value={props.selectedEntry.date} onChange={props.handleChange} name={'date'} />
                    <input className="goal" type='text' value={props.selectedEntry.goal} onChange={props.handleChange} name={'goal'} />
                    <input className="toDo" type='text' value={props.selectedEntry.toDo} onChange={props.handleChange} name={'toDo'} />
                    <input className="message" type='text' value={props.selectedEntry.message} onChange={props.handleChange} name={'message'} />
                </div>
            </form>
        </div>
    )
}

export default UpdateEntry