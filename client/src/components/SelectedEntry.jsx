///////////// IMPORT ////////////////
import '..styles/SelectedEntry.css'
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
            <div className='selectedDiv'>
                <p className='date'>{props.selectedEntry.date}</p>
                <p className='goal'>{props.selectedEntry.goal}</p>
                <p className='toDo'>{props.selectedEntry.toDo}</p>
                <p className='message'>{props.selectedEntry.message}</p>
            </div>
            <Link to={'update'}><button>Edit</button></Link>
            <button onClick={deleteButton}>Delete</button>
            <Link to={'/userentries'}><button>Back</button></Link>

        </div>
    ) : null
}

export default SelectedEntry