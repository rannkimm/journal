import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom"
import UpdateEntry from "./UpdateEntry"

const SelectedEntry = (props) => {

    let {id} = useParams()
    useEffect(() => {
        async function getCurrentEntry() {
            let currentEntry = await props.userEntries.find( (entry) => {
                return entry._id === id
            })
            props.setSelectedEntry(currentEntry)

        }
        getCurrentEntry()
    })

   

    return props.selectedEntry ? (
        <div>
            <div >
                <p>{props.selectedEntry.date}</p>
                <p>{props.selectedEntry.goal}</p>
                <p>{props.selectedEntry.toDo}</p>
                <p>{props.selectedEntry.message}</p>
                <Link to={'update'}>Edit</Link>
                <button>Delete</button>
            </div>
            <Link to={'/userentry'}><button>Back</button></Link>

        </div>
    ) : null
}

export default SelectedEntry