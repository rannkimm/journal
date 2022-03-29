import { Link } from "react-router-dom"

const UserEntry = (props) => {

return (
    <div>
        <div>
    {props.userEntry.map(entry => {
        return (
            <Link to={`/userentry/${entry._id}`}>
            <div>
                    <p>{entry.date}</p>
                    <p>{entry.goal}</p>
                    <p>{entry.todo}</p>
                    <p>{entry.message}</p>
            </div>
            </Link>
        )
    })}
        </div>
    </div>
)

}

export default UserEntry