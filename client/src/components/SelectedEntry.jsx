import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const SelectedEntry = (props) => {

    const [selectedEntry, setSelectedEntry] = useState('')

    let {_id} = useParams()

    useEffect(() => {
        let currentEntry = props.userEntry.find((entry) =>
        (entry._id === parseInt(_id)
            ))
        setSelectedEntry(currentEntry)
    }, [])


    return (
        <div>
                    <div key={selectedEntry._id}>
                        <p>{selectedEntry.date}</p>
                        <p>{selectedEntry.goal}</p>
                        <p>{selectedEntry.toDo}</p>
                        <p>{selectedEntry.message}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                    <Link to={'/userentry'}><button>Back</button></Link>
        </div>
    )
}

export default SelectedEntry