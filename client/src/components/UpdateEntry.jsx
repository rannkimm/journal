
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const UpdateEntry = (props) => {

    let navigate = useNavigate()

    const submitData = (e) => {
        e.preventDefault()
        props.updateUserEntry(props.selectedEntry)
        navigate('/userentries')
    }



useEffect (() => {

},)


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