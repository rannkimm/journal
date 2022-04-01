//////////// IMPORT /////////////
import Nav2 from './Nav2'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

//////////// USERENTRY COMPONENT FUNCTION ///////////////////
const UserEntry = (props) => {

    //////// USEFFECT ///////
    useEffect (() => {
    props.getUserEntries()
    }, [])

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
                    <div onClick={() => showEntry(entry)} key={entry._id}>
                            <p>{entry.date}</p>
                            <p>{entry.goal}</p>
                            <p>{entry.toDo}</p>
                            <p>{entry.message}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default UserEntry