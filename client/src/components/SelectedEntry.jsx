///////////// IMPORT ////////////////
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

/////////////////// SELECTEDENTRY COMPONENT FUNCTION /////////////////////
const SelectedEntry = (props) => {

    ///// DESTRUCTURING ENTRY ID /////
    let {id} = useParams()

    ///// USEEFFECT /////
    useEffect(() => {
        async function getCurrentEntry() {
            let currentEntry = await props.userEntries.find( (entry) => {
                return entry._id === id
            })
            props.setSelectedEntry(currentEntry)

        }
        getCurrentEntry()
    })

    ///// VARIABLE DEFINING USENAVIGATE /////
    let navigate = useNavigate()

    ///// FUNCTION FOR DELETE BUTTON /////
    const deleteButton = (e) => {
        e.preventDefault()
        props.deleteEntry(props.selectedEntry)
        navigate('/userentries')
    }

   

    return props.selectedEntry ? (
        <div>
            <div >
                <p>{props.selectedEntry.date}</p>
                <p>{props.selectedEntry.goal}</p>
                <p>{props.selectedEntry.toDo}</p>
                <p>{props.selectedEntry.message}</p>
                <Link to={'update'}>Edit</Link>
                <button onClick={deleteButton}>Delete</button>
            </div>
            <Link to={'/userentries'}><button>Back</button></Link>

        </div>
    ) : null
}

export default SelectedEntry