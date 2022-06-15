//////////// IMPORT /////////////
import '..styles/UserEntry.css'
import Nav2 from './Nav2'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

//////////// USERENTRY COMPONENT FUNCTION ///////////////////
const UserEntry = (props) => {
    console.log(props)
    //////// USEFFECT ///////
    useEffect (() => {
    props.getUserEntries()
    })

    ///// VARIABLE DEFINING USENAVIGATE /////
    let navigate = useNavigate()

    ///// FUNCTION THAT SELECTS AN ENTRY BY _ID/////
    const showEntry = (entry) => {
        navigate(`${entry._id}`)
    }

    return (
        <div>
            <Nav2 />
            <div>
                {props.userEntries.map((entry) => (
                    <div className='entry' onClick={() => showEntry(entry)} key={entry._id}>
                            <p className='entryDate'>{entry.date}</p>
                            <p className='entryGoal'>{entry.goal}</p>
                            <p className='entryToDo'>{entry.toDo}</p>
                            <p className='entryMessage'>{entry.message}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default UserEntry