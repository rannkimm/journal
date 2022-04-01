////////////// IMPORT ////////////////
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
            this page is connected
            <form onSubmit={submitData}>
                <input type='text' value={props.selectedEntry.date} onChange={props.handleChange} name={'date'} />
                <input type='text' value={props.selectedEntry.goal} onChange={props.handleChange} name={'goal'} />
                <input type='text' value={props.selectedEntry.toDo} onChange={props.handleChange} name={'toDo'} />
                <input type='text' value={props.selectedEntry.message} onChange={props.handleChange} name={'message'} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateEntry