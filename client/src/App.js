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
const [userEntries, setUserEntries] = useState([])
const [selectedEntry, setSelectedEntry] = useState({})
const [newUserEntry, setNewUserEntry] = useState({
  date: '',
  goal: '',
  toDo: '',
  message: '',
})


useEffect (() => {
  async function getUserEntries() {
    try {
      let res = await axios.get('http://localhost:3001/entry')
      setUserEntries(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  getUserEntries()
}, [])

const addNewUserEntry = async (e) => {
  e.preventDefault()
  const currentEntry = userEntries
  const createEntry = {
    ...newUserEntry,
    date: newUserEntry.date,
    goal: newUserEntry.goal,
    toDo: newUserEntry.toDo,
    message: newUserEntry.message
  }

  let res = await axios.post('http://localhost:3001/entry/new', createEntry)
  currentEntry.push(res.data)
  setUserEntries(currentEntry)
  setNewUserEntry({date: '', goal: '', toDo: '', message: ''})
}

const handleChange = (e) => {
  setNewUserEntry({...newUserEntry, [e.target.name]: e.target.value })
}



  return (
    <div className="App">
      <Nav />
      <Nav2 />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/userentries" element={<UserEntry userEntries={userEntries}/>} />
          <Route path="/userentries/:id" element={<SelectedEntry userEntries={userEntries} setSelectedEntry={setSelectedEntry} selectedEntry={selectedEntry}/>} />
          <Route path="/userentries/:id/update" element={<UpdateEntry selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry}/>} />
          <Route path="/userentry/entry" element={<Entry newUserEntry={newUserEntry} handleChange={handleChange} addNewUserEntry={addNewUserEntry}/>} />
          <Route path="/postcomment" element={<PostComment />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
