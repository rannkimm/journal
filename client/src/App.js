import './App.css';
import axios from 'axios';
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from './components/Home';
import Entry from './components/Entry';
import WelcomeUser from './components/WelcomeUser';
import PostComment from './components/PostComment';
import UserLogin from './components/UserLogin';
import UserSignin from './components/UserSignIn'
import SelectedEntry from './components/SelectedEntry';
import UserEntry from './components/UserEntry';
import UpdateEntry from './components/UpdateEntry';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';
import { useEffect, useState } from 'react'



function App() {
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({
    username: '',
    name: '',
    email: '',
    password: ''
  })
  const [currentUser, setCurrentUser] = useState ({})
  const [loginUser, setLoginUser] = useState ({
    username: '',
    name: '',
    email: '',
    password: ''
  })
  const [findUser, setFindUser] = useState ({})
  const [entries, setEntries] = useState([])
  const [userEntries, setUserEntries] = useState([])
  const [selectedEntry, setSelectedEntry] = useState({})
  const [newUserEntry, setNewUserEntry] = useState({
    user: '',
    date: '',
    goal: '',
    toDo: '',
    message: '',
  })

  let navigate = useNavigate()

  useEffect (() => {

    async function getEntries() {
      try {
        let res = await axios.get('http://localhost:3001/entry')
        setEntries(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    
    async function getAllUsers() {
      try {
      let response = await axios.get('http://localhost:3001/user')
      setUsers(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    getEntries()
    getAllUsers()
    
  },[])

  

  const addNewUser = async (e) => {
    e.preventDefault()
    const currentUsersList = users
    const createUser = {
      ...newUser,
      username: newUser.username,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password
      
    }
    
     if(currentUsersList.find(user => user.username === createUser.username) === undefined) {
        let res = await axios.post('http://localhost:3001/user/signin', createUser)
        let createdUser = res.data
        console.log(createdUser)
        currentUsersList.push(createdUser)
        setUsers(currentUsersList)
        setNewUser({username:'', name: '', email: '', password: ''})
        console.log('list of users',users)
        setCurrentUser(createdUser)
        console.log('this is created user', createdUser)
        navigate('/userhome')
        return
      } else {
        alert('Existing username! Try a different username!')
        createUser = {username: '', name: '', email: '', password: ''}
      }
  }

  const userHandleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value})
  }

  const getExistUser = async (e) => {
    e.preventDefault()
    const existUser = {
      ...loginUser,
      username: loginUser.username,
      name: loginUser.name,
      email: loginUser.email,
      password: loginUser.password
    }

    let res = await axios.get('http://localhost:3001/user/login')
    let foundUser = res.data
    setFindUser(foundUser)
    console.log(res.data)

    // switch (foundUser.name)
    
    // if (foundUser.name === existUser.name && foundUser.email === existUser.email &&  foundUser.password === existUser.password) {
    //   setCurrentUser(findUser)
    // } else if(foundUser.name === existUser.name || foundUser.email === existUser.email || foundUser.password === existUser.password) {
    //   alert("Not an existing user! Try again!")
    // }
  }

  const loginHandleChange = (e) => {
    setLoginUser({...loginUser, [e.target.name]: e.target.value })
  }

 const getUserEntries = async (e) => {
    try {
      let res = await axios({
        url: `http://localhost:3001/entry/${currentUser._id}`,
        method: 'get',
        data: {user: currentUser._id}
      })
      setUserEntries(res.data)
      console.log(userEntries)
    } catch (error) {
      console.log(error)
    }
  }


  const addNewUserEntry = async (e) => {
    e.preventDefault()
    const currentEntry = userEntries
    const createEntry = {
      ...newUserEntry,
      user: currentUser._id,
      date: newUserEntry.date,
      goal: newUserEntry.goal,
      toDo: newUserEntry.toDo,
      message: newUserEntry.message
    }

    let res = await axios.post('http://localhost:3001/entry/new', createEntry)
    currentEntry.push(res.data)
    setUserEntries(currentEntry)
    setNewUserEntry({user: '', date: '', goal: '', toDo: '', message: ''})
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
          <Route path="/" element={<Home currentUser={currentUser} />} />
          <Route path="/userlogin" element={<UserLogin loginUser={loginUser} users={users} findUser={findUser} currentUser={currentUser} getExistUser={getExistUser} loginHandleChange={loginHandleChange}/>} />
          <Route path="/usersignin" element={<UserSignin addNewUser={addNewUser} userHandleChange={userHandleChange} newUser={newUser} currentUser={currentUser} />} />
          <Route path="/userhome" element={<WelcomeUser currentUser={currentUser}/>} />
          <Route path="/userentries" element={<UserEntry userEntries={userEntries} currentUser={currentUser}  getUserEntries={getUserEntries} />} />
          <Route path="/userentries/:id" element={<SelectedEntry userEntries={userEntries} setSelectedEntry={setSelectedEntry} selectedEntry={selectedEntry} deleteEntry={deleteEntry}/>} />
          <Route path="/userentries/:id/update" element={<UpdateEntry selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry} updateUserEntry={updateUserEntry} handleChange={updatehandleChange}/>} />
          <Route path="/userentries/entry" element={<Entry newUserEntry={newUserEntry} handleChange={handleChange} addNewUserEntry={addNewUserEntry} currentUser={currentUser} />} />
          <Route path="/postcomment" element={<PostComment />} />
          <Route path='/nav' element={<Nav currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          <Route path='/nav2' element={<Nav2 currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
