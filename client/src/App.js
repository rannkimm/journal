import './App.css';
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Entry from './components/Entry';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';
import PostComment from './components/PostComment';
import User from './components/User';
import SelectedEntry from './components/SelectedEntry';
import UserEntry from './components/UserEntry';
import UpdateEntry from './components/UpdateEntry';
import { useEffect, useState } from 'react'


function App() {
const [userEntry, setUserEntry] = useState([])
const [newUserEntry, setNewUserEntry] = useState({
  date: '',
  goal: '',
  toDo: '',
  message: '',
})
const [oneEntry, setOneEntry] = useState([])
// const [updateUserEntry, setUpdateUserEntry] = useState([])

useEffect (() => {
  async function getUserEntry() {
    try {
      let res = await axios.get('http://localhost:3001/entry')
      setUserEntry(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  getUserEntry()
}, [])

const addNewUserEntry = async (e) => {
  e.preventDefault()
  const currentEntry = userEntry
  const createEntry = {
    ...newUserEntry,
    date: newUserEntry.date,
    goal: newUserEntry.goal,
    toDo: newUserEntry.toDo,
    message: newUserEntry.message
  }

  let res = await axios.post('http://localhost:3001/entry/new', createEntry)
  currentEntry.push(res.data)
  setUserEntry(currentEntry)
  setNewUserEntry({date: '', goal: '', toDo: '', message: ''})
}

const handleChange = (e) => {
  setNewUserEntry({...newUserEntry, [e.target.name]: e.target.value })
}

const findOneEntry = async (e) => {
  let res = await axios.get('http://localhost:3001/entry/:id')
  setOneEntry(res.data)
}


// const AddUpdateUserEntry = async (e) => {
//   e.preventDefault()
//   let res = await axios.put('http://localhost:3001/entry/:id/update')
// }

  return (
    <div className="App">
      <Nav />
      <Nav2 />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/userentry" element={<UserEntry userEntry={userEntry}/>} />
          <Route path="/userentry/:id" element={<SelectedEntry oneEntry={oneEntry}/>} />
          <Route path="/userentry/:id/update" element={<UpdateEntry userEntry={userEntry}/>} />
          <Route path="/userentry/entry" element={<Entry newUserEntry={newUserEntry} handleChange={handleChange} addNewUserEntry={addNewUserEntry}/>} />
          <Route path="/postcomment" element={<PostComment />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
