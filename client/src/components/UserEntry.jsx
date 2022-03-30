import Nav2 from './Nav2'
import { useNavigate } from "react-router-dom"

const UserEntry = (props) => {

let navigate = useNavigate()

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
                        <p>{entry.todo}</p>
                        <p>{entry.message}</p>
                </div>
            ))}
        </div>
    </div>
)

}

export default UserEntry