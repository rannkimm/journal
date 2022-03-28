const UserEntry = (props) => {


    return (
        <div>
            {props.userEntry.map((entry) => (
                <div key={entry._id}>
                    <p>{entry.date}</p>
                    <p>{entry.goal}</p>
                    <p>{entry.toDo}</p>
                    <p>{entry.message}</p>
                </div>
            ))}
        </div>
    )
}

export default UserEntry