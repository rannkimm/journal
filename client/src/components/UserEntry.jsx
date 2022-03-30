import { useNavigate } from "react-router-dom"

const UserEntry = (props) => {

let navigate = useNavigate()

const showEntry = (entry) => {
    navigate(`${entry._id}`)
}

return (
    <div>
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