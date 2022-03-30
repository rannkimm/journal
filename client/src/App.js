import './App.css';
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Entry from './components/Entry';
import PostComment from './components/PostComment';
import UserLogin from './components/UserLogin';
import UserSignin from './components/UserSignIn'
import SelectedEntry from './components/SelectedEntry';
import UserEntry from './components/UserEntry';
import UpdateEntry from './components/UpdateEntry';
import { useEffect, useState } from 'react'


function App() {
const [users, setUsers] = useState([])

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
  
  async function getAllUsers() {
    let response = await axios.get('http://localhost:3001/user')
    setUsers(response.data)
    
  }

getAllUsers()

},[])

const addNewUser = async (e) => {
  e.preventDefault()
}

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

const updateUserEntry = async () => {
  const updateEntry = {
    ...selectedEntry
  }

  let updatedEntry = await axios({
    url: `http://localhost:3001/entry/${updateEntry._id}/update`,
    method: 'put',
    data: updateEntry
  })

  const toChangeEntry = userEntries.find((entry) => entry._id === updatedEntry.data._id)

  userEntries.splice(toChangeEntry, 1, updateEntry)

  setSelectedEntry({date: '', goal: '', toDo: '', message: ''})
}

const updatehandleChange = (e) => {
  setSelectedEntry({...selectedEntry, [e.target.name]: e.target.value })
}

const deleteEntry = async () => {
  const toDelete = selectedEntry

 let deletedEntry = await axios({
    url: `http://localhost:3001/entry/${toDelete._id}`,
    method: 'delete',
    data: toDelete
  })
  const toDeleteEntry = userEntries.find((entry) => entry._id === deletedEntry.data)
  userEntries.splice(toDeleteEntry, 1)
  
  setSelectedEntry({date: '', goal: '', toDo: '', message: ''})
}

  return (
    <div className="App">


      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/usersignin" element={<UserSignin />} />
          <Route path="/userentries" element={<UserEntry userEntries={userEntries}/>} />
          <Route path="/userentries/:id" element={<SelectedEntry userEntries={userEntries} setSelectedEntry={setSelectedEntry} selectedEntry={selectedEntry} deleteEntry={deleteEntry}/>} />
          <Route path="/userentries/:id/update" element={<UpdateEntry selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry} updateUserEntry={updateUserEntry} handleChange={updatehandleChange}/>} />
          <Route path="/userentries/entry" element={<Entry newUserEntry={newUserEntry} handleChange={handleChange} addNewUserEntry={addNewUserEntry}/>} />
          <Route path="/postcomment" element={<PostComment />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
