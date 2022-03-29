import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import UpdateEntry from "./UpdateEntry"

const SelectedEntry = (props) => {
    const [selectedEntry, setSelectedEntry] = useState()

    let {id} = useParams()
    useEffect(() => {
        async function getCurrentEntry() {
            let currentEntry = await props.userEntry.find( (entry) => {
                console.log(entry._id)
                console.log(id)
                return entry._id === id
            })
            setSelectedEntry(currentEntry)
            console.log(selectedEntry)
        }
        getCurrentEntry()
    })

   

    return selectedEntry ? (
        <div>
            <div >
                <p>{selectedEntry.date}</p>
                <p>{selectedEntry.goal}</p>
                <p>{selectedEntry.toDo}</p>
                <p>{selectedEntry.message}</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <Link to={'/userentry'}><button>Back</button></Link>
            <Routes>
                <Route path="/userentry/:id/update" element={<UpdateEntry selectedEntry={selectedEntry} />} />
            </Routes>
        </div>
    ) : null
}

export default SelectedEntry