import axios from "axios"
import { useState, useEffect } from "react"

const UpdateEntry = (props) => {
const [updateEntry, setUpdateEntry] = useState()

useEffect (() => {
    async function getUpdateEntry() {
        let res = await axios({
            url:'http://localhost:3001/entry/:id/update',
            method: 'post',
            data:form
        })
        console.log(res)
    }
    getUpdateEntry()
},)


    return (
        <div>
            this page is connected
            <form>
                {/* <input type='text' value={props.newUserEntry.date} onChange={props.handleChange} name={'date'} placeholder={props.selectedEntry.date}/>
                <input type='text' value={props.newUserEntry.goal} onChange={props.handleChange} name={'goal'} placeholder={props.selectedEntry.date}/>
                <input type='text' value={props.newUserEntry.toDo} onChange={props.handleChange} name={'toDo'} placeholder={props.selectedEntry.date}/>
                <input type='text' value={props.newUserEntry.message} onChange={props.handleChange} name={'message'} placeholder={props.selectedEntry.date}/> */}
            </form>
        </div>
    )
}

export default UpdateEntry