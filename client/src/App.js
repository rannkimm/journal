///////////// IMPORT ////////////
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

///////////// APP FUNCTION /////////////
function App() {

  ////////////////// SETTING STATE //////////////////

  // SET STATE FOR USERS //
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword:''
  })
  const [currentUser, setCurrentUser] = useState ({})
  const [loginUser, setLoginUser] = useState ({
    username: '',
    password: ''
  })

  // SET STATE FOR ENTRIES //
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

  //////// VARIABLES DEFINING USENAVIGATE ////////
  let navigate = useNavigate()
  let loginNavigate = useNavigate()


  ////// USEEFFECT //////
  useEffect (() => {

    /// FUNCTION TO GET ALL ENTRIES ///
    async function getEntries() {
      try {
        let res = await axios.get('http://localhost:3001/entry')
        setEntries(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    
    /// FUNCTION TO GET ALL USERS ///
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

  
  /////////////// FUNCTIONS FOR USERSIGNIN COMPONENT ///////////////
  const addNewUser = async (e) => {
    e.preventDefault()
    const currentUsersList = users
    const createUser = {
      ...newUser,
      username: newUser.username,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      confirmPassword: newUser.confirmPassword
      
    }
    
     if(currentUsersList.find(user => user.username === createUser.username) === undefined && createUser.password === createUser.confirmPassword) {
        let res = await axios.post('http://localhost:3001/user/signin', createUser)
        let createdUser = res.data
        currentUsersList.push(createdUser)
        setUsers(currentUsersList)
        setNewUser({username:'', name: '', email: '', password: '', confirmPassword:''})
        setCurrentUser(createdUser)
        navigate('/userhome')
        return
      } else if(createUser.password !== createUser.confirmPassword) {
        alert('Your password does not match! Try again!')
        createUser = {username: '', name: '', email: '', password: '', confirmPassword:''}
      } else {
        alert('Existing username! Try a different username!')
        createUser = {username: '', name: '', email: '', password: '', confirmPassword:''}
      }
  }

  const userHandleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value})
  }

  /////////////// FUNCTIONS FOR USERLOGIN COMPONENT ///////////////
  const getExistUser = async (e) => {
    e.preventDefault()
    let currentUsersList = users
    const existUser = {
      ...loginUser,
      username: loginUser.username,
      password: loginUser.password
    }
    if(currentUsersList.find(users => users.username === existUser.username) === undefined || currentUsersList.find(users => users.password === existUser.password) === undefined) {
      alert('That is not an existing username or password. Try again!')
      setLoginUser({username:'', password:''})
    } else {
        let res = await axios({
          url: `http://localhost:3001/user/login/${existUser.username}/${existUser.password}`,
          method: 'get',
          data: {username: existUser.username, password: existUser.password}
        })
        await setCurrentUser(res.data)
        loginNavigate('/userhome')
    }
  }

  const loginHandleChange = (e) => {
    setLoginUser({...loginUser, [e.target.name]: e.target.value })
  }

  /////////////// FUNCTIONS FOR USERENTRY COMPONENT ///////////////
  const getUserEntries = async (e) => {
    try {
      console.log("in get user entries")
      let res = await axios({
        url: `http://localhost:3001/entry/${currentUser._id}`,
        method: 'get',
        data: {user: currentUser._id}
      })
      setUserEntries(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  /////////////// FUNCTIONS FOR ENTRY COMPONENT ///////////////
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

  /////////////// FUNCTIONS FOR UPDATEENTRY COMPONENT ///////////////
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

  /////////////// FUNCTIONS FOR SELECTEDENTRY COMPONENT ===> DELETE BUTTON ///////////////
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
          <Route path="/userlogin" element={<UserLogin loginUser={loginUser} users={users} currentUser={currentUser} getExistUser={getExistUser} loginHandleChange={loginHandleChange}/>} />
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
