import axios from "axios"
import { useState, useEffect } from "react"

const UpdateEntry = (props) => {
const [newUpdateEntry, setNewUpdateEntry] = useState()



useEffect (() => {

},)


    return (
        <div>
            this page is connected
            <form >
                <input type='text' value={props.selectedEntry.date}  name={'date'} />
                <input type='text' value={props.selectedEntry.goal}  name={'goal'} />
                <input type='text' value={props.selectedEntry.toDo}  name={'toDo'} />
                <input type='text' value={props.selectedEntry.message} name={'message'} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateEntry